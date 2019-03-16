const crypto = require('crypto');
const bcrypt = require('bcrypt-nodejs');
module.exports = function (sequelize, Sequelize) {

    const User = sequelize.define('user', {

            id: {
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },

            firstname: {
                type: Sequelize.STRING,
                notEmpty: true
            },

            lastname: {
                type: Sequelize.STRING,
                notEmpty: true
            },

            username: {
                type: Sequelize.TEXT,
                set(value) {
                    this.setDataValue('username', value.toString().toLowerCase());
                },
                validate: {
                    notEmpty: {
                        msg: "username don't allow empty strings"
                    }
                }
            },
            gender: {
                type: Sequelize.STRING,
                defaultValue: 'M',
                notEmpty: true
            },
            role: {
                type: Sequelize.STRING,
                defaultValue: 'user',
                notEmpty: true
            },
            mobileVerified: {
                type: Sequelize.BOOLEAN,
                defaultValue: false,
                notEmpty: true
            },
            mobile: Sequelize.STRING,
            email: {
                type: Sequelize.STRING,
                allowNull: false,
                unique: true,
                validate: {
                    isEmail: true,
                    isLowercase: true
                }
            },

            password: {
                type: Sequelize.STRING,
                allowNull: false,
                set: function (value) {
                    const salt = bcrypt.genSaltSync(10);
                    const password = bcrypt.hashSync(value, salt);
                    return this.setDataValue('password', password);
                }
            },

            last_login: {
                type: Sequelize.DATE,

                defaultValue: sequelize.fn('NOW')
                // or defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
            },

            status: {
                type: Sequelize.ENUM('active', 'inactive'),
                defaultValue: 'active'
            },
            messages: {
                type: Sequelize.STRING,
                allowNull: false,
                get: function () {
                    return this.getDataValue('messages').split(';')
                },
                set: function (val) {
                    console.log(val) ///////// val.join is not a function
                    this.setDataValue('messages', val.join(';'));
                }
            },
            notifications: {
                type: Sequelize.STRING,
                allowNull: false,
                get: function () {
                    return this.getDataValue('notifications').split(';')
                },
                set: function (val) {
                    this.setDataValue('notifications', val.join(';'));
                }
            },
            tasks: {
                type: Sequelize.STRING,
                allowNull: false,
                get: function () {
                    return this.getDataValue('tasks').split(';')
                },
                set: function (val) {
                    this.setDataValue('tasks', val.join(';'));
                }
            }
        },
        
        {
            freezeTableName: true,
            timestamps: true,
            paranoid: true,
            hooks: {
                beforeValidate: function (user, option) {
                    if (typeof user.email === 'string') {
                        user.email = user.email.toLowerCase().trim();
                    }
                }
            },


            classMethods: {
                checkPassword(email, password) {
                    if (typeof email !== 'string' || typeof password !== 'string') {
                        Promise.reject('email or password is invalid');
                    }
                    return new Promise((resolve, reject) => {
                        User.findOne({
                                where: {
                                    email
                                }
                            }).then(function (detail) {
                                const comparePw = bcrypt.compareSync(password, detail.get('password')) // sequelize Model.get()
                                if (!detail || !comparePw) {
                                    return reject('user does not exist or password invalid');
                                }
                                resolve(detail);
                            })
                            .catch(function (err) {
                                reject(new Error('User not found...'));
                            })
                    })
                },
                comparePassword: function (body) {
                    console.log('Comparing email and password ...................');
                    //  return new Promise(function (resolve, reject) {
                    const {
                        email,
                        password
                    } = body
                    return User.checkPassword(email, password)
                        .then(detail => resolve(detail))
                        .catch(error => reject(error))

                    //  })
                },
                changePassword(email, oldPassword, newPassword) {
                    User.checkPassword(email, oldPassword)
                        .then(() => {
                            return User.update( //http://exploringjs.com/es6/ch_promises.html 25.9.2 Mistake: nesting Promises #
                                {
                                    password: newPassword
                                }, {
                                    where: {
                                        email: email
                                    }
                                })
                        })
                        .then(() => console.log('Password has been changed ***'))
                        .catch(error => reject(error))
                }
                
            },
            getterMethods: {
                fullName() {
                    return this.getDataValue('firstname') + ' ' + this.getDataValue('lastname')
                },
                profile() {
                    return {
                        'fullName': this.getDataValue('firstname') + ' ' + this.getDataValue('lastname'),
                        'role': this.getDataValue('role'),
                        'messages': this.getDataValue('messages'),
                        'notifications': this.getDataValue('notifications'),
                        'tasks': this.getDataValue('tasks')
                    }
                },
                token() {
                    const timestamp = Date.now();
                    return {
                        'id': this.id,
                        'profile': {
                            'fullName': this.getDataValue('firstname') + ' ' + this.getDataValue('lastname'),
                            'role': this.getDataValue('role'),
                            'messages': this.getDataValue('messages'),
                            'notifications': this.getDataValue('notifications'),
                            'tasks': this.getDataValue('tasks')
                        },
                        'iat': timestamp
                    }
                },

                setterMethods: {
                    fullName(value) {
                        const names = value.split(' ');

                        this.setDataValue('firstname', names.slice(0, -1).join(' '));
                        this.setDataValue('lastname', names.slice(-1).join(' '));
                    }

                }

            }
        },
        
    );

    return User;

}
const {DataTypes} = require('sequelize')

module.exports = {
    async up({context: queryInterface}) {
        await queryInterface.createTable('properties', {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false
            },
            price: {
                type: DataTypes.INTEGER,
                defaultValue: 1
            },
            location: {
                type: DataTypes.STRING,
                allowNull: false
            },
            available: {
                type: DataTypes.BOOLEAN,
                defaultValue: true
            }
        })
        await queryInterface.createTable('users', {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            name: {
                type: DataTypes.STRING,
                validate: {
                    len: [4, 10]
                },
                allowNull: false
            },
            username: {
                type: DataTypes.STRING,
                validate: {
                    len: [5, 10]
                },
                allowNull: false
            },
            email: {
                type: DataTypes.STRING,
                validate: {
                    isEmail: true
                },
                allowNull: false
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false
            },
            profileImage: {
                type: DataTypes.STRING,
                validate: {
                    isUrl: true
                }
            }
        })
        await queryInterface.addColumn('properties', 'userId', {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'users',
                key: 'id'
            }
        })
    },
    async down ({context: queryInterface}) {
        await queryInterface.dropTable('properties')
        await queryInterface.dropTable('users')
    }
}
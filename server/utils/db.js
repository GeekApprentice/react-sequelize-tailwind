import {Sequelize} from 'sequelize'
import { DATABASE_URL} from './config.js'
import { Umzug, SequelizeStorage } from 'umzug'

const sequelize = new Sequelize(DATABASE_URL, {
    dialect: 'postgres'
})

const migratorConf = {
    migrations: {
        glob: "migrations/*.js"
    },
    storage: new SequelizeStorage({sequelize, tableName: 'migrations'}),
    context: sequelize.getQueryInterface(),
    logger: console
}

const runMigrations = async () => {
    await sequelize.authenticate()
    const migrator = new Umzug(migratorConf)
    const migrations = await migrator.up()
    console.log('Migrations updated', {
        files: migrations.map((m) => m.name)
    })
}

const rollBackMigrations = async () => {
    await sequelize.authenticate()
    const migrator = new Umzug(migratorConf)
    await migrator.down()

}

const databaseConnection = async () => {
    try {
        await sequelize.authenticate()
        console.log('connected to database')
    } catch (error) {
        console.log('connection failed')
        process.exit(1)
    }
}

export {
    sequelize, 
    databaseConnection,
    runMigrations,
    rollBackMigrations
}
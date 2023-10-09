import express from 'express'
import { databaseConnection } from './utils/db.js'
import { PORT } from './utils/config.js'
import userRouter from './routes/user.js'
import propertiesRouter from './routes/properties.js'

const app = express()

app.use(express.json())

app.use('/api/users', userRouter)
app.use('/api/properties', propertiesRouter)

const start = async () => {
    await databaseConnection()
    app.listen(PORT, () => {
        console.log(`server running on port ${PORT}`)
    })
}

start()


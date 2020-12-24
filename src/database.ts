import mongoose, { ConnectOptions } from 'mongoose'
import config from './config/config'

const dbOptions:ConnectOptions = {
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true

}

mongoose.connect(config.DB.URI)

const connection = mongoose.connection

connection.once('open', () => {
    console.log('mongodb connection')
})

connection.on('error',err => {
    console.log(err)
    process.exit(0)
})
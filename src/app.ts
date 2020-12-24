import cors from 'cors'
import express from 'express'
import morgan from 'morgan'
import passport from 'passport'
import passportMiddleware from './middlewares/passport'

import authRoutes from './routes/auth.routes'

//initialization
const app = express()

//settings
app.set('port',process.env.PORT || 3000)

//middleware
app.use(morgan('dev'))
app.use(cors())
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(passport.initialize())
passport.use(passportMiddleware)

//routes
app.get('/',(req,res)=>{
    res.send(`the api is at http://localhost:${app.get('port')}`)
})

app.use(authRoutes)

export default app
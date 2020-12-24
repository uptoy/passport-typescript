export default {
    jwtsecret:process.env.JWT_SECRET || 'secrettoken',
    DB:{
        URI:process.env.MONGODB_URI ||'mongodb://localhost/passport',
        USER:process.env.MONGODB_USER,
        PASSWORD:process.env.MONGODB_PASSWORD
    }
}
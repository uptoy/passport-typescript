import app from './app'
import './database'

app.listen(app.get('port'))
console.log('server on Port', app.get('port'))
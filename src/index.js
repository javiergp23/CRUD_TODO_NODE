import app  from './app.js'
import { connectDB } from './db.js'

connectDB()
app.listen(3023)
console.log('Server running on port ', 3023)
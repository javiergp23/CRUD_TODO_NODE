import app  from './app.js';
import { connectDB } from './db.js';

//Conexión a la base de datos
connectDB()

//Inicio del servidor
app.listen(3023)
console.log('Server running on port ', 3023)
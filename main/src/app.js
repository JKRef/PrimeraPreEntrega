import express from "express";
import cartRouter from './routes/carrito_rutas.js';
import productRouter from './routes/productos_rutas.js';

const app = express();
app.use(express.json());
app.use(express.urlencoded( {extended: true} ));
//app.use('/api/products', express.static('public'))

app.use('/api/carts', cartRouter);
app.use('/api/products', productRouter);

app.listen(9090, () => console.log("Servidor inicializado :)"));
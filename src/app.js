import express from 'express'
import marketRoutes from './routes/market.routes.js'

const app=express()

// Middleware para procesar JSON
app.use(express.json());

// Middleware para procesar datos de formularios (opcional, si usas x-www-form-urlencoded)
app.use(express.urlencoded({ extended: true }));

app.use(marketRoutes)

// Middleware para manejar peticiones a rutas no definidas (Error 404)
app.use((req, res, next) => {
    // 1. Establece el código de estado HTTP a 404 (Not Found)
    res.status(404);

    // 2. Envía una respuesta JSON informativa al cliente
    res.json({
        message: "Ruta no encontrada. Favor realizar pruebas en los siguientes endpoints:",
        endpoints: [
            // Usa una variable de entorno o una constante para la URL base si es posible
            "https://https://apimarket-production-f956.up.railway.app//usuarios",
            "https://https://apimarket-production-f956.up.railway.app//productos"
        ]
    });
    
    // NOTA: No es necesario llamar a 'next()' aquí porque ya se envió la respuesta.
});
export default app;

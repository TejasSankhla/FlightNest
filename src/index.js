const express = require('express');
const { PORT } = require('./config/server-config');
const morgan = require('morgan');
const { createProxyMiddleware } = require('http-proxy-middleware');



const PrepareAndStartServer = () => {
    const app = express();
    app.use(morgan('combined'));


    app.use('/bookings',createProxyMiddleware({ target:'http://localhost:3002', changeOrigin: true }));

    app.listen(PORT, async () => {
        console.log(`Server started at PORT :${PORT}`);
    })
}
PrepareAndStartServer();
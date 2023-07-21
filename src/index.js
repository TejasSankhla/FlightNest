const express = require('express');
const { PORT } = require('./config/server-config');
const morgan = require('morgan');
const { createProxyMiddleware } = require('http-proxy-middleware');
const rateLimit = require('express-rate-limit')
const axios = require('axios');
const PrepareAndStartServer = () => {
    const app = express();
    const limiter = rateLimit({
        windowMs: 1 * 60 * 1000, // 15 minutes
        max: 5, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
        // standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
        // legacyHeaders: false, // Disable the `X-RateLimit-*` headers
    });
    app.use(limiter)
    app.use(morgan('combined'));

    app.get('/home', (req, res) => {
        return res.json({
            message: "Ok"
        });
    });

    app.use('/bookings', async (req, res, next) => {
        try {
            console.log("hi");
            // console.log(req.headers['x-access-token']);
            const response = await axios.get('http://localhost:3000/api/v1/isAuthenticated', {
                headers: {
                    'x-access-token': req.headers['x-access-token']
                }
            });
            // console.log(response.data);// why not printing only response
            if (response.data.success) {
                next();
            }
            else {
                return res.status(401).json({
                    message: 'Unauthorised'
                });
            }
        } catch (error) {
            return res.status(401).json({
                message: 'Unauthorised'
            });
        }

    })


    app.use('/bookings', createProxyMiddleware({ target: 'http://localhost:3002/', changeOrigin: true }));

    app.listen(PORT, async () => {
        console.log(`Server started at PORT :${PORT}`);
    })
}
PrepareAndStartServer();

//to run server in bg
// pm2 start index.js
//pm2 stop index.js
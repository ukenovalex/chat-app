const express = require('express');
const router = express.Router();
const cors = require('cors')();

// const corsOptions = {
//     "origin": "*",
//     "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
//     "preflightContinue": false,
//     "optionsSuccessStatus": 204
// }


router.get('/', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
    res.send('Server is running')
});

module.exports = router;
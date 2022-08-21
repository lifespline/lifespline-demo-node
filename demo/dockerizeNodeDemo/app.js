const express = require('express');
const redis = require('redis');

const PORT = 8080;

const app = express();
const redisClient = redis.createClient(6379, '127.0.0.1');

(async () => {
    redisClient.connect();
 })();

redisClient.on('error', (err) => {
    console.log('Error occured while connecting or accessing redis server');
});


app.use(express.json());

app.get('/', (req,res) => {
    res.status(200).json({
        message : "Demo dockerizing a `nodejs` app with a `redis` database."
    });

    // res = await redisClient.get('customer_name', redis.print);

    // res.then(success => console.log('Writing Property : customer_name')).catch(error => console.log(error));
});

app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`);
});






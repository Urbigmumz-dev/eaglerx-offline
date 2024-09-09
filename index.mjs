import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';

const PORT = 8080;
const app = express();

app.use(express.static('other/miner/public/'));
app.use(bodyParser.urlencoded({ extended: true, }));

http.createServer(app).listen(PORT, (err) => {
    if (err) {
        console.error(err.message);
    } else {
        console.log('running on port: ', PORT);
    }
});
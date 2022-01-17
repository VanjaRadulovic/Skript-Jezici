const express = require('express');
const { sequelize, Users } = require('./models');
const cors = require('cors');

const userR = require('./routes/userR');
const kanalR = require('./routes/kanalR');
const videoR = require('./routes/videoR');
const komentariR = require('./routes/komentariR');

const app = express();

var corsOptions = {
    origin: "http://localhost:8000",
    optionsSuccessStatus: 200
}

app.use(express.json());
app.use(cors(corsOptions));

app.use('/administator', userR);
app.use('/administator', kanalR);
app.use('/administator', videoR);
app.use('/administator', komentariR);


app.listen({ port: 8080 }, async () => {
    await sequelize.authenticate();
});
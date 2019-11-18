const express = require('express');
const mongoose = require('mongoose');

const routes = require("./routes");

const app = express();

mongoose.connect('mongodb+srv://migluuz:migluuz@curso-lx0rd.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser : true,
    useUnifiedTopology: true,
});

//GET POST PUT DELETE

// req.query acessar query params
// req.params acessar route params
// req.body acessar corpo da requisicao

app.use(express.json());
app.use(routes);

app.listen(3333);

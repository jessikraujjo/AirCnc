const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const cors = require("cors");
const path = require("path");

const app = express();

mongoose.connect('mongodb+srv://omnistack:omnistack@omnistack9-zgz6i.mongodb.net/semana09?retryWrites=true&w=majority', 
{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

// req.query:  acessam query params(filtros)
// req.params = acessar routes para, (adicao, delete)
// req.body = acessar o corpo da requisicao (p criacao e edicao)
app.use(cors());
app.use(express.json());
app.use(routes);
app.use('/files', express.static(path.resolve(__dirname, '..','uploads')));
app.listen(3333);
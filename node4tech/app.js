//Creating express
const express = require('express');
const app = express();
const port = 3000;
let vagas = require('./config/vagas.js');
const Vaga = require('./model/vaga.js');
//bodyParser parses info that came in the req
const bodyParser = require('body-parser');

const createVaga = (obj) => new Vaga(obj.id, obj.name, obj.description,
    obj.skills, obj.salary, obj.area, obj.differentials, obj.isPcd, obj.isActive);

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
// Async: evita que fica esperando
app.get('/', async (requestAnimationFrame,res) => {
    try {
     res.send('Hello World');
    } catch (error) {

    }
})

app.get('/vagas', async (req,res) => {
    try {
        res.send(vagas);
    } catch (error){

    }
})

app.get('/vagas/:id_vaga', async (req,res) =>{
    try{
        console.log('test');
        let id_param = req.params.id_vaga;
        result = (vagas.find(function (element){
            return element.id = id_param;
        }));
        if (result === null) return res.status(500).send('Internal error');
        return res.send(result);
    } catch (error){
        return res.status(500).send('Internal error');
    }

})

app.post('/vagas', async (req,res) => {
    try {
        let vagasLength = vagas.length;
        console.log(vagas.length);
        let vaga = createVaga(req.body);
        console.log('teste2');
        vagas.push(vaga);
        if(vagas.length > vagasLength) return res.send('Added');
        return res.status(500).send('Internal error');
    } catch (error) {
        return res.status(500).send('Internal error');
    }
})
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})



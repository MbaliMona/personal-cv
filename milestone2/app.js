require('dotenv').config()

const {
    response
} = require('express');
const express = require('express');
const app = express();


const port = process.env.PORT;
const host = process.env.HOST;

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded())

let emailArr = []
app.get('/', (request, response) => {
    response.render('index');
});
app.get('/', (request, response) => {
    response.render('index.ejs');
});
app.get('/', (request, response) => {
    response.render('contact.ejs');
});
app.get('/', (request, response) => {
    response.render('projects.ejs');
});
app.get('/', (request, response) => {
    response.render('about.ejs');
});
app.listen(port, host, () => {
    console.log(`Server is running on port ${port} and server name${host}`);
});

app.post('/process-contact-data', (request, response) => {

    let email = request.body.txtemail;
    let dataToSave = {
        email,
    }
    emailArr.push(dataToSave)
    response.send(emailArr)
})
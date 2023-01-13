const express = require('express');
const bodyParser = require('body-parser')

const app = express();
const PORT = process.env.PORT || 3003

app.set('view engine', 'ejs');

app.use(express.static('public'))
// app.use(express.urlencoded({extended: true})) //its enable sending data from clientside to server
app.use(bodyParser.urlencoded({extended: true}))

let comNames = ['HP', 'Acer', 'Dell'];

//sending a response to frontend or clientside
app.get('/', (req, res)=>{ 
    res.status(200).render('index', { pageTitle: 'Home Page', CompNames: comNames});
})

//getting data from frontend and insert it onto plNames array of String
app.post('/', (req, res) => {
    const comName = req.body.comName;
    comNames.push(comName);
    res.redirect('/')
})

app.get('/about', (req, res)=>{ 
    res.status(200).render('about', { pageTitle: 'About Page' });
})

app.get('/contact', (req, res)=>{ 
    res.status(200).render('contact', { pageTitle: 'Contact Page' });
})

app.listen( PORT, () => {
    console.log(`server is running at http://localhost:${PORT}`)
})
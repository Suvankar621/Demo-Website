const express = require("express");
const path = require("path");

const app = express();
const port = 80;

// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static')) // For serving static files
app.use(express.urlencoded())

// PUG SPECIFIC STUFF
app.set('view engine', 'pug') // Set the template engine as pug
app.set('views', path.join(__dirname, 'views')) // Set the views directory
 
// ENDPOINTS
app.get('/', (req, res)=>{
    
    res.status(200).render('index.pug');
})
app.get('/contact', (req, res)=>{
    
    res.status(200).render('contact.pug');
})
app.post('/contact', (req,res)=>{
    const form=req.body;
    console.log(form);
    const params={'message:': 'successful'}
    res.status(200).render('contact.pug', params);

})



// START THE SERVER
app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});

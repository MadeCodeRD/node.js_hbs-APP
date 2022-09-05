const path = require('path');
const express = require('express');
const fs = require('fs');

const app = express();

// Paths 
const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');


// Definición del Path
app.use(express.static(publicDirectoryPath));

// Handlebars
app.set('view engine', 'hbs');
app.set('views', viewsPath);
//hbs.registerPartials(partialsPath);

// Routes
app.get("", (req, res) => {
    res.render('index');
});

app.get("/about", (req, res) => {
    res.render('about');
});



app.get('/download', (req,res)=>{
    const file= '../PORTAFOLIO/public/documents/resumen.pdf';
    res.download(file);
    
});



app.get('/visualize', (req,res)=>{

   const file= '../PORTAFOLIO/public/documents/resumen.pdf';
   fs.createReadStream(file).pipe(res);
 
});

app.get("*", (req, res) => {
    res.render('404');
});

app.listen(3000, () => {
    console.log('Server corriendo http://localhost:3000');
});

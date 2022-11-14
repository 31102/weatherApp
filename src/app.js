const express = require('express');
const abc = require("hbs")
const app = express();
const path = require('path');
const port = process.env.PORT || 8000 ;


const staticPath = path.join(__dirname , "../public/");
const templete_path = path.join(__dirname , "../src/templetes/views")
const partial_path = path.join(__dirname , "../src/templetes/partials");

// console.log(templete_path)

app.set('view engine' , 'hbs');
app.set('views' , templete_path)
abc.registerPartials(partial_path);

app.use(express.static(staticPath));



app.get("", (req , res)=>{
    res.render('index.hbs')
});

app.get("/weather", (req , res)=>{
    res.render("weather")
});

app.get("/about", (req , res)=>{
    res.render('about')
});

app.get("*", (req , res)=>{
    res.render("404error" , {
        errorMsg : "Opps ! Page Not Found Click here to Go back"
    })
});

app.listen(port , ()=>{
    console.log(`Listening to port number ${port}`)
})
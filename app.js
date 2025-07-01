import express from "express";
import path from "path";
import url from "url";
import fetch from 'node-fetch';
const PORT = 3000;
const app = express();

// SET EJS 
app.set('view engine', 'ejs');
app.set('views', 'views');

// LOCATION
const __fileName = url.fileURLToPath(import.meta.url);
const __dirName = path.dirname(__fileName);

// Body middleWare
app.use(express.urlencoded({extended: false}));
app.use(express.static(path.join(__dirName, 'public')));

// GET Weather
app.get('/weather', (req, res)=>{
    res.render('weather', {temp: 'Temp', imgLink: "defaultImg.png"});    
}); 

// POST temp
app.post('/fetchTemp', async (req, res)=>{
    const city = req.body.city;
    const weather = await fetch(`https://api.weatherapi.com/v1/current.json?key=96ea482484bf46228f6170541252402&q=${city}`);
    const temp = await weather.json();
    res.render('weather', {
        temp: `${temp.current.temp_c}°C`,
        imgLink: `${temp.current.condition.icon}`
    })
})






app.listen(PORT, (req, res)=>{
    console.log(`http://localhost:${PORT}/weather`);
})
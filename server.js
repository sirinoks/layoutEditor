const express = require('express')
const app = express()
const port = 3000
const fs = require('fs')

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static('./'));


app.get('/sender', function(req, res) {
    res.sendfile('/jsonFile.json');
    res.sendfile('/styleData.json');
 });

app.get('/get', function(req, res) {
	let localJson = JSON.parse(fs.readFileSync('Model/positionData.json', 'utf8'));
    res.send(localJson);
 })

app.get('/getStyleData', function(req, res) {
    let localJson = JSON.parse(fs.readFileSync('Model/styleData.json', 'utf8'));
    res.send(localJson);
 })

app.post('/post', (req, res) => {

    fs.writeFile("Model/positionData.json", JSON.stringify(req.body), function (err) {
        if (err) {
            return console.log(err);
        }
        console.log(JSON.stringify(req.body));
    });
    return res.sendStatus(201);
});

app.post('/postStyleData', (req, res) => {
    fs.writeFile("Model/styleData.json", JSON.stringify(req.body), function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("The style was saved!");
    });
    return res.sendStatus(201);
});

app.get('/', (req, res) => res.sendFile('index.html', { root: __dirname }))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
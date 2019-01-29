const bodyParser = require('body-parser');
//const pug = require('pug');
const es6Renderer = require('express-es6-template-engine');
const fs = require('fs');
const express = require('express');
const app = express();
const port = 3000;

//const compiledFunction = pug.compileFile('index.pug');
app.engine('html', es6Renderer);
app.set('views', './')
app.set('view engine', 'html');

app.use(express.static('./'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.post('/', (req, res) => { 
  let headers = [];
  let csv = [];
  for (key in req.body) {
    if (!headers.includes(key)) {
      headers.push(key);
    }
  }
  for (key in req.body) {
    csv.push(req.body[key])
  }
  console.log('this is the csv:', headers, csv);
  //res.send(csv);
  res.render('index', { });
  //pug.renderFile(csv, 'index.pug');
  
})


app.listen(port, () => console.log(`You are not alone, trust no one\nwith love, port ${port}!`));
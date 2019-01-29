const bodyParser = require('body-parser');
const pug = require('pug');
const express = require('express');
const app = express();
const port = 3000;

const compiledFunction = pug.compileFile('index.pug');

app.set('view engine', 'pug');

app.use(express.static('./'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  console.log(req.body)
  res.send('Hello World!')
});

app.post('/', (req, res) => {
  console.log('this is the body.message', req.body.message);
  res.render('index.pug', { message: req.body.message })
})

app.listen(port, () => console.log(`app listening on port ${port}!`));
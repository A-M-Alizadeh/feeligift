//PORT
const express = require('express');
const home = require('./routes/home');

const app = express();

app.set('view engine','pug');
app.set('views','./views')
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/', home);

const port = process.env.PORT || 3000

app.listen(port,()=>{
    console.log(`Listening on port ${port} ...`)
});

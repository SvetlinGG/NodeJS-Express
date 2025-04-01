const express = require('express');
const logger = require('./middlewares/loggerMiddleware')


const app = express();

app.use(logger);

app.get('/', (req, res) => {
    console.log('get request on /');

    res.send('<h1>Hello from Express!</h1>')

});
app.get('/cats', (req, res) => {
    res.send('Cats Mama')
});

app.get('/cats/:catId', (req, res) => {
    console.log(req.params);
    

    res.send(`<h1>Cat Profile of ${req.params.catId}</h1>`)
});

app.get('/old-cats', (req, res) => [
    res.redirect('/cats')
])

app.get('/pdf', (req, res) => {
    res.download('./downloads/CATALOG AUTO.pdf')
})

app.listen(2000, () => console.log('Server is listening on http://localhost:2000'));


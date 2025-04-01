const express = require('express');

const app = express();

app.get('/', (req, res) => {
    console.log('get request on /');

    res.send('<h1>Hello from Express!</h1>')

});
app.get('/cats', (req, res) => {
    res.send('Cats Mama')
})
app.listen(2000, () => console.log('Server is listening on http://localhost:2000'));


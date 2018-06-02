const EXPRESS = require('express');

const APP = EXPRESS();

APP.get('/', (req, res) => {
    res.status(404).send({
        error: 'Page not found.',
        name: 'Todo App 1.0'
    });
});

APP.get('/users', (req, res) => {
    res.send([
        {
            name: 'Tim',
            age: 36
        },
        {
            name: 'John',
            age: 40
        },
        {
            name: 'Mary',
            age: 28
        }
    ]);
});

APP.listen(3000);

module.exports = {
    APP
}
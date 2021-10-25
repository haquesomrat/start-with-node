const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const port = 5000;


app.get('/', (req, res) => {
    res.send('Hello from my second node & you server');
})


app.get('/users', (req, res) => {
    const search = req.query.search;
    if (search) {
        const searchResult = users.filter(user => user.name.toLowerCase().includes(search));
        res.send(searchResult);
    }
    else {
        res.send(users);
    }

});

//app.METHOD
app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('hitting me', req.body)
    // res.send(JSON.stringify(newUser))
    res.json(newUser);
})

const users = [
    { id: 0, name: 'Shabana', email: 'shabana@gmail.com', phone: '019782963737' },
    { id: 1, name: 'Srabonti', email: 'srabonti@gmail.com', phone: '019782963737' },
    { id: 2, name: 'suchorita', email: 'suchorita@gmail.com', phone: '019782963737' },
    { id: 3, name: 'Jasmine', email: 'jasmine@gmail.com', phone: '019782963737' },
    { id: 4, name: 'Aleya', email: 'aleya@gmail.com', phone: '019782963737' },
    { id: 5, name: 'Moushumi', email: 'moushumi@gmail.com', phone: '019782963737' }
];


//dynamic api
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id];
    res.send(user)
});

app.get('/fruits/mangoes/fazli', (req, res) => {
    res.send('yummy yummu fazli mangoes')
})

app.listen(port, () => {
    console.log('Listening to port');
})
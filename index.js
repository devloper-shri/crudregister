require('dotenv').config();
const express = require('express');

const app = express();

// ----- ROUTES ------
const userRouter = require('./routes/userRoutes');
const loginRouter = require('./routes/loginRoutes');
// -------------------

app.use('/', express.json());

app.get('/', (request, response) => {
  response.send();
});

app.use('/user', userRouter);

app.use('/login', loginRouter);


app.listen(3000, () => console.log('connected port 3000!'));

const express = require('express');
const app = express();
const morgan = require('morgan');

const {mongoose} = require('./database')

// Settings
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(morgan('dev'));
app.use(express.json());

// Routes
app.use('/api/dishes',require('./routes/dish.routes'));

//Start server
app.listen(app.get('port'),()=>{
    console.log('Server running on port '+app.get('port'));
});
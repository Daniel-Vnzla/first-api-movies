const express = require('express');
const app = express();
const morgan = require('morgan');


//Settings
const PORT = process.env.PORT || 3000;
app.set('json spaces',2);

//Midlewere
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}))
app.use(express.json());

//Routes
app.use(require('./routes/index.js'));
app.use('/api/movies',require('./routes/movies.js'));
app.use('/api/users',require('./routes/users.js'));


//Starting Server
app.listen(PORT,() => {
	console.log('Server Ready!',PORT);
})
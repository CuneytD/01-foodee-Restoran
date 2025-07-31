const express = require('express');
const app = express();

const db = require('./data/db');

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({extended : true}));

// router
const indexRoutes = require('./Routes/indexRoutes');
const adminRoutes = require('./Routes/adminRoutes');

app.use('/', indexRoutes);
app.use('/product-kontrol', adminRoutes);


app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
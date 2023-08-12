
const express = require('express');
const ejs = require('ejs')
const app = express();
const path = require('path');

app.set('views', path.join(__dirname, 'src/pages'));
app.set('view engine', 'ejs');

   // Api 
const depremApi=require('./routes/api/deprem');

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
 // Api Router 
app.use('/api/last-earthquakes',depremApi)
 
// Start server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

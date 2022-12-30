const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('./utll/database');
const adminRoutes = require('./routes/admin');
const mainPageRouter = require('./routes/main-page');
const portNumber = process.env.PORT || 3000;

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(mainPageRouter);
app.use('/admin', adminRoutes);

app.use((req, res, next) => {
    res.status(404).render('404', { pageTitle: 'Error Page' });
});


app.listen(portNumber || process.env.PORT, () => {
    console.log(`You are running in the port number ${portNumber}....`);
})
const mongoose = require('mongoose');

const DBurl = 'mongodb://localhost/restaurant-CRUD';

mongoose.connect(DBurl)
.then(db => console.log("DB is connected"))
.catch(err => console.error(err));

module.exports = mongoose;
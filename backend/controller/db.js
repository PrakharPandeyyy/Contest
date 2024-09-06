const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/contest', {
    useNewUrlParser: true,
}).then(() => {
    console.log('Connected to the database');
}).catch((e) => {
    console.log(e.message);
});

module.exports = mongoose;
const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/record").then(() => console. log('Db Connected'))
.catch(() => console.log("not connected"));

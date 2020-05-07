const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/task_manager',
{ 
    useNewUrlParser: true, 
    useUnifiedTopology:true, 
    useFindAndModify: true, 
    useCreateIndex: true 
});

var fs = require('fs');

const modelsPath = __dirname + '/../models';

fs.readdirSync(modelsPath).forEach(function(file){
    if(file.indexOf('.js') > -1){
        require(modelsPath + '/' + file);
    }
})
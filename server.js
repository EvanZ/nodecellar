/**
 * Created with JetBrains WebStorm.
 * User: evanzamir
 * Date: 11/30/12
 * Time: 11:25 PM
 * To change this template use File | Settings | File Templates.
 */
var express = require('express');

var app = express();

app.get('/wines', function(req, res) {
    res.send([{name:'wine1'}, {name:'wine2'}]);
});
app.get('/wines/:id', function(req, res) {
    res.send({id:req.params.id, name: "The Name", description: "description"});
});

app.listen(3000);
console.log('Listening on port 3000...');
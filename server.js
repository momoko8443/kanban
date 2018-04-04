const express = require('express');
var request = require('request');
const fs = require('fs');
request = request.defaults({'proxy':'http://web-proxy.jpn.hp.com:8080'});
const app = express();

app.use(express.static('app'));
app.use(express.static('node_modules'));

var weather;
app.get('/api/weather', function (req, res) {
    console.log('access /api/weather');
    if (weather) {
        res.send(weather);
    } else {
        request.get('http://api.map.baidu.com/telematics/v3/weather?location=%E4%B8%8A%E6%B5%B7&output=json&ak=1cc417013c0750b41d65a5ddded0ff7b', (err, response, body) => {
            weather = body;
            res.send(body);
        });
    }

});

app.get('/api/realdata', function (req, res) {
    console.log('access /api/realdata');
    var mockdata = JSON.parse(fs.readFileSync('./mock-real-data.json'));
    res.send(mockdata.realdata);
});

app.get('/api/community/activity', function (req, res) {
    console.log('access /api/community/activity');
    var mockdata = JSON.parse(fs.readFileSync('./mock-real-data.json'));
    res.send(mockdata.community.activity);
});

const server = app.listen(3000, () => {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port);
});
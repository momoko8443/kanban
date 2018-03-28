const express = require('express');
const request = require('request');
const r = request.defaults({'proxy':'http://web-proxy.jpn.hp.com:8080'});
const app = express();

app.use(express.static('app'));
app.use(express.static('node_modules'));

app.get('/api/weather',function(req,res){
    console.log('access /api/weather');
    r.get('http://api.map.baidu.com/telematics/v3/weather?location=%E4%B8%8A%E6%B5%B7&output=json&ak=1cc417013c0750b41d65a5ddded0ff7b',(err,response,body) => {
        res.send(body);
    });
})

const server = app.listen(3000, () => {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port);
});
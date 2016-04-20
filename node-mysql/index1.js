/**
 * Created by zhaoxiaobing on 16/3/15.
 */

var express = require('express');
var app = express();
var mysql = require('mysql');
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
    extended: true
}));


var conn = mysql.createConnection({
    host     : '101.200.127.91',
    user     : 'root',
    password : 'qq54321..',
    database : 'nodejs',
    port : '3306'
});



//conn.connect();
app.post('/data', function (req, res) {
    console.log(req.body);

    //res.send("111");
    var startNum = req.body.start;
    var lenNum = req.body.length;

    var page = req.body.draw;
    var counts = null;
    conn.query('select count(*) as num from user',function(err, rows, fields){
        counts = JSON.parse(JSON.stringify(rows))[0].num;
        conn.query('select * from user limit '+startNum+','+lenNum+'', function(err, rows, fields) {
            if (err) throw err;
            var data = {};
            data.draw = page;
            data.recordsTotal = counts;
            data.recordsFiltered = counts;
            data.data = rows;
            res.send(data);
        });

    });
});


app.listen(3000);

//conn.end();
var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var articleOne = {
    title: 'Article one I Kasi'
};
function createTemplate(data){
    var title=data.title;
    var htmlTemplate=`<html>
        <head><title>${title}</title>
            <link href="/ui/style.css" rel="stylesheet" />
        </head>
        <body>
            <div>
                <div class="container">
                    <a href="/">Home</a>
                </div>
                <hr/>
                <h3>Article One</h3>
                <div>Aug 1, 2017</div>
                <div><p>This is content for my first Article. This is content for my first Article. This is content for my first Article. This is content for my first Article. This is content for my first Article. This is content for my first Article. </p>
                <p>This is content for my first Article. This is content for my first Article. This is content for my first Article. This is content for my first Article. This is content for my first Article. This is content for my first Article. </p>
                <p>This is content for my first Article. This is content for my first Article. This is content for my first Article. This is content for my first Article. This is content for my first Article. This is content for my first Article. </p>
                </div>
            </div>
        </body>
    </html>`;
    return htmlTemplate;
}
var counter=0;
app.get('/counter', function (req, res){
    counter=counter+1;
    res.send(counter.toString());
});
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/artical-one', function (req, res) {
  res.send(createTemplate( articleOne));
});

app.get('/artical-two', function (req, res){
    res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
})

app.get('/artical-three', function (req, res){
    res.sendFile(path.join(__dirname, 'ui', 'article-three'));
})

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});

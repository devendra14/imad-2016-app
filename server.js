var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


app.get('/article-one',function (req, res) {
res.send(templat(article1));
});

   
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var article1 = {
    title:'hello article one title section',
    heading:'heading aerticle one',
    date: 'sep 05 2106',
    content : `<p>article one.    this is article one.    this is article one.    this is article one.    this is article one.    this is article one. </p>`
};

function templat(data)
{
var title =data.title;
var heading =data.heading;
var date =data.date;
var content  =data.content;
var dev =
    `<html>
    <head>
        <title> ${title}
        </title>
        <meta name="viewport" content="width=device-width , initial-scale-1"/>
        <link href="/ui/style.css" rel="stylesheet" />
</head>

<body>
    <div class="contenar">
       <div>
          <a href="/">home</a>
       </div>
     <hr/>
     <h3>
        ${heading}
     </h3>
           
    <div>
               ${date}
    </div> 
    
    <div>
        ${content}
           
    </div>
    </div>

</body>
</html>`;

return templat;
}




app.get('/article-two',function (req, res) {
res.sendFile(path.join(__dirname, 'ui', 'article-two.html')); 
});



app.get('/article-three',function (req, res) {
res.sendFile(path.join(__dirname, 'ui', 'article-three.html')); 
});



app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});

var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
   


var articles={

    'article-one':{
            title:'hello article one title section',
            heading:'heading aerticle one',
            date: 'sep 05 2106',
            content : `<p>this is article one.    this is article one.    this is article one.    this is article one.    this is article one. </p>`
       },
    'article-two':{
            title:'hello article two title section',
            heading:'heading aerticle two',
            date: 'sep 05 2106',
            content : `<p>this is article two. this is article two. this is article two. this is article two. this is article two. </p>`
       },
    'article-three':{
            title:'hello article three title section',
            heading:'heading aerticle three',
            date: 'sep 05 2106',
            content : `<p>this is article three. this is article three.     this is article three.    this is article three.    this is article three.     </p>`
       }
   
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
return dev;
}

app.get('/', function (req, res) 
 {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
 });
 
 var counter = 0;
 app.get('/counter',function (req, res) 
  {
   counter=counter+1;
   res.send(counter.toString());   
 });
 
 
app.get('/:articlename',function (req, res) 
{
  var dev=req.params.articlename;
  res.send(templat(articles[dev]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});


app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

var names =[];
app.get('/submit-name/:name',function(req, res){
    // get the name from the requt
    var name = req.params.name;

    names.push(name);
    //JSON java script object notation
    
    res.send(JSON.stringify(names));
});





var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});

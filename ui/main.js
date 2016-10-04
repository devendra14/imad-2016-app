console.log('Loaded!');
// change the text main div
var element=document.getElementById('main-text');
element.innerHTML='this is a new value';
//move image 
var image = document.getElementById("dev");

 var marginLeft=0;

function moveRight() {
    marginLeft= marginLeft+10;
    image.style.marginLeft = marginLeft + 'px';
}

image.onclick= function()
{
    
  var interval = setinterval(moveRight, 100);

};
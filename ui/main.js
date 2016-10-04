console.log('Loaded!');
// change the text main div
var element=document.getElementById('main-text');
element.innerHTML='this is a new value';
//move image 
var img = document.getElementById('madi');

function moveRight() {
    var marginRight=0;
    
    marginRight= marginRight+10;
    img.style.marginLeft = marginLeft+'px';
}

img.onclick= function()
{
    
var interval = setinterval(moveRight,100);

};
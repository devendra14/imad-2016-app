console.log('Loaded!');
// change the text main div
var element=document.getElementById('main-text');
element.innerHTML='this is a new value';
//move image 
var das=document.getElementById('dev');
 var marginLeft=0;
function moveRight() {
    marginLeft= marginLeft+10;
    das.style.marginLeft = marginLeft + 'px';
}

das.onclick= function()
{
    
  var interval = setinterval(moveRight, 10);

};
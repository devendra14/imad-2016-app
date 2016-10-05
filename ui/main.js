//counter code
var button= document.getElementById('counter');
var counter = 0;
button.onclick = function()
{
    
    //make a requst to the counter end point
    
    
    //capchure the response
    
    
    //render the veriable to the currect span
    
    counter = counter+1;
    var span=document.getElementById('count');
    span.innerHTML = counter.toString();
};
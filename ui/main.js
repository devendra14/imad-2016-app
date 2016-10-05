//counter code
var button= document.getElementById('counter');
button.onclick = function()
{
    
    //make a requst to the counter end point
    
    
    //capchure the response
    
    
    //render the veriable to the currect span
    
    counter=counter + 3;
    var span=document.getElementById('count');
    span.innerHTML=counter.toString();
    
};
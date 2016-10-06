//counter code
var button= document.getElementById('counter');
button.onclick = function()
{
    //make a requst to the counter end point
    var request = new XMLHttpRequest();
    //capchure the response
    request.onreadystatechange = function()
    {
        if(request.readyState === XMLHttpRequest.DONE)
        {
           //take some action
           if(request.status ===200)
           {
              var counter =request.responseText;
              var span=document.getElementById('count');
              span.innerHTML = counter.toString();
            }
        }
    };
   
};
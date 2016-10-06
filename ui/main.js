//counter code
var button= document.getElementById('counter');
button.onclick = function()
{
    //creat a requst
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
        //not done yet
    };
   //make a requst 
   request.open('GET','http://devendra14.imad.hasura-app.io/counter', true);
   request.send(null);
};
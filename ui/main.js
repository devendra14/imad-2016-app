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
               var counter =requst.responceText;
               var span = document.getElementById('count');
                span.innerHTML = counter.toString();
               
               
                     //make a request to the server and send the name
              var names = ['name1','name2','name3','name4'];
              var list='';
              for(var i=0; i<names.length;   i++)
                 {
                    list+= '<li>' + names[i]+'</li>';
                  }
              var ul = document.getElementById('namelist');
              ul.innerHTML = list;
           }
        }
        //not done yet
    };
    //make a requst 
   request.open('GET','http://devendra14.imad.hasura-app.io/counter', true);
   request.send(null);     
};

   
    
    
    
    

               








//submit name
var nameInput = document.getElementById('name');
var name = nameInput.value;
var submit = document.getElementById('submit_btn');
submit.onclick = function()
    {

};
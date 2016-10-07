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
//submit name
var nameInput = document.getElementById('name');
var name = nameinput.value;
var submit = document.getElementById('sumit_btn');
submit.onclick = function()
  {
  //make a request to the server and send the name
  var name = ['name1','name2','name3'];
  var list='';
  for(var i=0; i<name.length;i++)
  {
      list+= '<li>' + names[i]+'</li>';
  }
  var ul = document.getElementById('namelist');
  ul.innerHTML = list;
   
  //capture a list of name and render it as a list


  
    
  };
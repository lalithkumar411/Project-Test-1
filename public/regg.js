function adminFun(){
  document.getElementById("admin").addEventListener("click", function(e){
    window.location.href= "/Admin"
  });
}

function userFun(){
  document.getElementById("user").addEventListener("click", function(e){
    window.location.href= "/Login"
  });
}

function regFun(){
  document.getElementById("register").addEventListener("click", function(e){
    window.location.href= "/Register"
  });
}

function Success(){
  document.getElementById("sub").addEventListener("click", function(e){
    window.location.href= "http://www.google.com"
  });
}

function homeFun(){
  document.getElementById("home").addEventListener("click", function(e){
    window.location.href= "/"
  });
}

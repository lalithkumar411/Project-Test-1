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

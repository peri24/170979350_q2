function on() {
  document.getElementById("overlay").style.display = "block";
}

function off() {
  document.getElementById("overlay").style.display = "none";
}


function validatePassword(){
  var password1 = document.getElementById("password").value;

  var re = "the wind";

    if (password1 != re) {
      alert('Invalid Password')
      return false;

    }
    window.location.href="../page4/index.html";
    return true;


}

function setCookie(cname,cvalue,exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires=" + d.toGMTString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  var username = cname + "=";
  var password = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(username) == 0) {
      return c.substring(username.length, c.length);
    }
    if (c.indexOf(password) == 0) {
      return c.substring(password.length, c.length);
    }
  }
  return "";
}

function checkCookie() {
  var user=getCookie("username");
  var pass=get
  if (user != "") {
    alert("Welcome again " + user);
  } else {
     user = prompt("Please enter your username:","");
     if (user != "" && user != null) {
       setCookie("username", user, 30);
     }
  }
}
function clicked() {
	document.getElementById('lblError').innerHTML = "";
  var uname = document.getElementById("email").value;
  var pwd = document.getElementById("pwd1").value;

  var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  if (uname == '') {
	document.getElementById('lblError').innerHTML = "** Please enter Userame";
  } else if (pwd == '') {
   document.getElementById('lblError').innerHTML = "** Please enter Password";
  } else if (!filter.test(uname)) {
    alert("** Enter valid email");
  } else if (uname != "technobank" && pwd != 123456789) {
    alert("Invalid credentials, please provide correct username and password");
  } else if (pwd.length < 2 || pwd.length > 10) {
    alert("Password min and max length is 9.");
  } else {
    window.location = "Hompage.html";
  }
}

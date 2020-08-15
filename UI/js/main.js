function clicked() {
  document.getElementById('lblError').innerHTML = '';
  var uname = document.getElementById('email').value;
  var pwd = document.getElementById('pwd1').value;
  var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

  if (uname == '' && pwd == '') {
    document.getElementById('lblError').innerHTML = ' ** Please enter Username and Password';
  } else if (uname == '') {
    document.getElementById('lblError').innerHTML = ' ** Please enter Username';
  } else if (pwd == '') {
    document.getElementById('lblError').innerHTML = ' ** Please enter Password';
  } else if (!filter.test(uname)) {
    document.getElementById('lblError').innerHTML = ' ** Please provide @gmail.com';
  } else if (uname != 'technobank' && pwd != 12345678) {
    document.getElementById('lblError').innerHTML = ' ** // Invalid password';
  } else if (pwd.length < 2 || pwd.length > 10) {
    document.getElementById('lblError').innerHTML = ' ** Password min and max length is 9';
  } else {
    window.location = 'ACCOUNT SUMMARY PAGE.html';
  }
}

// function validateUserName(email) {
//            var regex = /^[0-9a-zA-Z_]+$/;
//            if (name.length < 8)
//                document.getElementById("msg1").innerHTML = "Username is too short";
//            else if (name.length > 15)
//                document.getElementById("msg1").innerHTML = "Username is too long";
//            else if (!name.match(regex)) {
//                document.getElementById("msg1").innerHTML = "Invalid characters in Username";
//            } else document.getElementById("msg1").innerHTML = "";
//                return;
//        } // end function validateUserName

//        function validatePassword(pwd1) {
//            var regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
//            if (password.length < 8)
//                document.getElementById("msg2").innerHTML = "Password is too short (min. 8 characters)";
//            else if (password.length > 15)
//                document.getElementById("msg2").innerHTML = "Password is too long (max. 15 characters)";
//            else if (!password.match(regex)) {
//                document.getElementById("msg2").innerHTML = "Invalid Password";
//            } else document.getElementById("msg2").innerHTML = "";
//                return;

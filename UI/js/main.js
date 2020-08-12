function clicked() {
  var user = document.getElementById('username');
  var pass = document.getElementById('password');

  var coruser = 'admin';
  var corpass = 'admin123';

  if (user.value == coruser) {
    if (pass.value == corpass) {
      window.alert('You are logged in as ' + user.value);
    } else {
      window.alert('Incorrect username or password ' + user.value);
    }
  } else {
    window.alert('Incorrect username or password ' + user.value);
  }
}

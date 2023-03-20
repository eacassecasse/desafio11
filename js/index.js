const emailField = document.getElementById('email');
const passwordField = document.getElementById('senha');
const hiddenToggle = document.getElementById('visibility-toggle');
const eyeIcon = './img/eye.svg';
const eyeOffIcon = './img/eye-off.svg';
visible = false;

var digits = 1234567890;
var letters = 'abcdefghijklmnopqrstuvwxyz';
const capitalizedLetters = letters.toUpperCase().split("");
var symbols = "\$#|!@%&/()=?«»+*~^ºª-_.:,;<>£§{[]}";
letters = letters.split("");
digits = digits.toString().split("");
symbols = symbols.split("");

hiddenToggle.addEventListener('click', () => {
  if (visible) {
    hiddenToggle.src = eyeOffIcon;
    passwordField.type = 'text';
    visible = false;
  } else {
    hiddenToggle.src = eyeIcon;
    passwordField.type = 'password';
    visible = true;
  }
});

emailField.addEventListener('focusout', () => {
  validateEmail(emailField.value);
});

passwordField.addEventListener('focusout', () => {
  validatePassword(passwordField.value);
});

function validateEmail(email) {
  var error = '';
  var emailRegEx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (email.length === 0 || email.startsWith(' ')) {
    error = 'O campo email é obrigatório';
  } else if (!email.match(emailRegEx)) {
    error = 'O email deve ter o seguinte formato: example@domain.com';
  }

  if (error != '') {
    var span = document.createElement('span');
    span.className = 'invalid';
    span.id = 'invalid-email';
    span.innerText = error;

    existantSpan = document.getElementById('invalid-email');

    if (existantSpan != null) {
      emailField.parentNode.removeChild(existantSpan);
    }

    emailField.parentNode.insertBefore(span, emailField.nextSibling);

  } else {
    existantSpan = document.getElementById('invalid-email');

    if (existantSpan != null) {
      emailField.parentNode.removeChild(existantSpan);
    }
  }


}

function validatePassword(password) {
  var error = '';

  if (password.length < 8 || password.startsWith(' ')) {
    error = 'A senha deve ter no mínimo 8 dígitos';
  }

  if (error != '') {
    var span = document.createElement('span');
    span.className = 'invalid';
    span.id = 'invalid-password';
    span.innerText = error;

    existantSpan = document.getElementById('invalid-password');

    if (existantSpan != null) {
      passwordField.parentNode.removeChild(existantSpan);
    }

    passwordField.parentNode.insertBefore(span, passwordField.nextSibling);
  } else {
    existantSpan = document.getElementById('invalid-password');

    if (existantSpan != null) {
      passwordField.parentNode.removeChild(existantSpan);
    }
  }
}

function contains(password) {
  var containsCapitalizedLetter = false;
  var containsDigit = false;
  var containsSymbol = false;

  for (var i = 0; i < password.length; i++) {
    capitalizedLetters.forEach((capitalLetter) => {
      if (password[i] === capitalLetter) {
        containsCapitalizedLetter = true;
      }
    });

    digits.forEach((digit) => {
      if (password[i] === digit) {
        containsDigit = true;
      }
    });

    symbols.forEach((symbol) => {
      if (password[i] === symbol) {
        containsSymbol = true;
      }
    });
  }

  return containsCapitalizedLetter && containsDigit && containsSymbol;
}

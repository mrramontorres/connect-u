// const { use } = require("passport");

$(document).ready(function() {
  // Getting references to our form and input
  console.log("pageisworking");
  var signUpForm = $("form#signup");
  var userNameInput = $("input#username-input");
  var emailInput = $("input#signupemail-input");
  var passwordInput =$("input#signuppassword-input");
  var vcForm = $("input#pokemonRed");
  var suForm = $("input#pokemonBlue");
  var TC = $("input.checkbox");

  // var radioValue = $("input[name='gender']:checked").val();


  // When the signup button is clicked, we validate the email and password are not blank
  signUpForm.on("submit", function(event) {
    event.preventDefault();

    var radioInput =$("input[type=\"radio\"]:checked").val();
    console.log(radioInput);

    var userData = {
      username: userNameInput.val().trim(),
      email: emailInput.val().trim(),
      password: passwordInput.val().trim(),
      vc: vcForm.click(),
      startup: suForm.click(),
      terms: TC.click()
    };

    if (
      !userData.username ||
      !userData.email ||
      !userData.password ||
      !userData.vc ||
      !userData.startup ||
      !userData.terms
    ) {
      return;
    }
    // If we have an email and password, run the signUpUser function
    signUpUser(
      userData.username,
      userData.email,
      userData.password,
      userData.vc,
      userData.startup,
      userData.terms
    );
    userNameInput.val("");
    emailInput.val("");
    passwordInput.val("");
    vcForm.click();
    suForm.click();
    terms.click();
  });

  // Does a post to the signup route. If successful, we are redirected to the browser page
  // Otherwise we log any errors
  function signUpUser(username, email, password, vc, startup, terms) {
    $.post("/api/signup", {
      username: username,
      email: email,
      password: password,
      vc: vc,
      startup: startup,
      terms:terms
    })
      .then(function(data) {
        window.location.replace("/members");
        console.log(data);
        // If there's an error, handle it by throwing up a bootstrap alert
      })
      .catch(handleLoginErr);
    console.log("It didn't work");
  }

  function handleLoginErr(err) {
    $("#alert .msg").text(err.responseJSON);
    $("#alert").fadeIn(500);
  }
  // If we have an email and password, run the signUpUser function
  signUpUser(userData.username, userData.email, userData.password, userData.vc, userData.startup, userData.terms);
  userNameInput.val("");
  emailInput.val("");
  passwordInput.val("");
  vcForm.click();
  suForm.click();
  TC.click();


  // Does a post to the signup route. If successful, we are redirected to the members page
  // Otherwise we log any errors
  // function signUp(username, email, password, vc, startup, terms) {
  //   $.post("/api/signup", {
  //     username: username,
  //     email: email,
  //     password: password,
  //     vc: vc,
  //     startup: startup,
  //     terms: terms,
  //   })
  //     .then(function (data) {
  //       console.log(data);
  //       window.location.replace("/browser");
  //       // If there's an error, handle it by throwing up a bootstrap alert
  //     })
  //     .catch(handleLoginErr);
  // }
  // signUp();
  // function handleLoginErr(err) {
  //   $("#alert .msg").text(err.responseJSON);
  //   $("#alert").fadeIn(500);
  // }

});

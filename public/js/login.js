// $ (document).ready(function(){

//     $("#logInBtn").click(function(e){

//        var alert = '<div class="alert alert-invalid"  role-"alert"> Email adresss or Password Incorrect!</div>'
//        e.preventDefault();
//          console.log("this hit");

//         $("form input").each(function(i){

//             if (!$(this).each()){
//                 $(this).addClass("is-invalid");
//                 return false;
//             } else {

//             $(this).removeClass("is-invalid".addClass);

//             }

//         })

//         const userInfo = {
//             email: $("#email-input1").val().trim(),
//             password: $ ("#password-input1").val().trim(),

//         };

//         $.ajax({
//              url:'/apiuser/login',
//              data: userInfo,

//         }).then((userInfo) => {
//             console.log(userInfo);
//             location.replace("/dashboard")
//         })
//        .catch(err =>  $("#alert").append(alert)
//                 // console.log("Your password or username incorrect!"+err));
//        )

//           console.log("login.js Linked!");

//     })

// });

$(document).ready(function () {
  // Getting references to our form and inputs
  var loginForm = $("form#login");
  var emailInput = $("input#email-input");
  var passwordInput = $("input#password-input");

  // When the form is submitted, we validate there's an email and password entered
  loginForm.on("submit", function (event) {
    event.preventDefault();
    console.log("event");
    var userData = {
      email: emailInput.val().trim(),
      password: passwordInput.val().trim(),
    };

    if (!userData.email || !userData.password) {
      return;
    }

    // If we have an email and password we run the loginUser function and clear the form
    loginUser(userData.email, userData.password);
    emailInput.val("");
    passwordInput.val("");
  });

  // loginUser does a post to our "api/login" route and if successful, redirects us the the members page
  function loginUser(email, password) {
    $.post("/api/login", {
      email: email,
      password: password,
    })
      .then(function () {
        window.location.replace("/members");
        // If there's an error, log the error
      })
      .catch(function (err) {
        console.log(err);
      });
  }
});

// $(document).ready(function () {

//     $("#signUp").on("click", function (e) {
//         e.preventDefault();
//        console.log("this hit");
//        const userInfo = {
//            userName: $( "#user-name-input").val().trim(),
//            email: $("#email-input").val().trim(),
//            password: $("#password-input").val().trim()

//        };
       
//        $("form input").each(function (i){
//          if (!$(this).val())  {
//              $(this).addClass("is-invalid");
//              return false;
//          }else {
//              $(this).removeClass("is-invalid").addClass("is-valid");
//          }

//        })

//       $.ajax({
//           url: '/api/user',
//           method:'POST',
//           data: userInfo
//       })
//       .then((userInfo) => {
//         console.log(userInfo);
//         // location.replace("/login")
//        switchFunction();
//       })
//       .catch(err => console.log(err));

//      });
       

// });
//     // console.log("signup.js linked!);

//     function switchFunction() {   

//         $loginMsg.toggleClass("visibility");
//         $frontbox.removeClass("moving");
//         $signup.toggleClass("visibility");

//         $signup.toggleClass('hide');
//         $login.toggleClass('hide');

//         // $(".works").html('<h4> Sign Sucessful!  PLease Log In')

//     }
    
//     function clearField() {
//         $("#user-name-input").reset();
//         $("#email-input").reset();
//         $("#password-input").reset();

//     }



$(document).ready(function() {
    // Getting references to our form and input
    var signUpForm = $("form#signup");
    var userNameInput = $("input#username-input")
    var emailInput = $("input#signupemail-input");
    var passwordInput = $("input#signuppassword-input");
  
    // When the signup button is clicked, we validate the email and password are not blank
    signUpForm.on("submit", function(event) {
      event.preventDefault();
      var userData = {
        email: emailInput.val().trim(),
        password: passwordInput.val().trim()
      };
  
      if (!userData.email || !userData.password) {
        return;
      }
      // If we have an email and password, run the signUpUser function
      signUpUser(userData.email, userData.password);
      emailInput.val("");
      passwordInput.val("");
    });
  
    // Does a post to the signup route. If successful, we are redirected to the members page
    // Otherwise we log any errors
    function signUpUser(email, password) {
      $.post("/api/signup", {
        email: email,
        password: password
      })
        .then(function(data) {
          window.location.replace("/members");
          // If there's an error, handle it by throwing up a bootstrap alert
        })
        .catch(handleLoginErr);
    }
  
    function handleLoginErr(err) {
      $("#alert .msg").text(err.responseJSON);
      $("#alert").fadeIn(500);
    }
  });










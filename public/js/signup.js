$(document).ready(function () {

    $("#signUp").on("click", function (e) {
        e.preventDefault();
       console.log("this hit");
       const userInfo = {
           userName: $( "#user-name-input").val().trim(),
           email: $("#email-input").val().trim(),
           password: $("#password-input").val().trim()

       };
       
       $("form input").each(function (i){
         if (!$(this).val())  {
             $(this).addClass("is-invalid");
             return false;
         }else {
             $(this).removeClass("is-invalid").addClass("is-valid");
         }

       })

      $.ajax({
          url: '/api/user',
          method:'POST',
          data: userInfo
      })
      .then((userInfo) => {
        console.log(userInfo);
        // location.replace("/login")
       switchFunction();
      })
      .catch(err => console.log(err));

     });
       

});
    // console.log("signup.js linked!);

    function switchFunction() {   

        $loginMsg.toggleClass("visibility");
        $frontbox.removeClass("moving");
        $signup.toggleClass("visibility");

        $signup.toggleClass('hide');
        $login.toggleClass('hide');

        // $(".works").html('<h4> Sign Sucessful!  PLease Log In')

    }
    
    function clearField() {
        $("#user-name-input").reset();
        $("#email-input").reset();
        $("#password-input").reset();

    }












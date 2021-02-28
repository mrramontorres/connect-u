$ (document).ready(function(){

    $("#logInBtn").click(function(e){

       var alert = '<div class="alert alert-invalid"  role-"alert"> Email adresss or Password Incorrect!</div>'
       e.preventDefault();
         console.log("this hit");

        $("form input").each(function(i){

            if (!$(this).each()){
                $(this).addClass("is-invalid");
                return false;    
            } else { 

            $(this).removeClass("is-invalid".addClass);

            }

        })

        const userInfo = {
            email: $("#email-input1").val().trim(),
            password: $ ("#password-input1").val().trim(),

        };
       
        $.ajax({
             url:'/apiuser/login',
             data: userInfo,  

        }).then((userInfo) => {
            console.log(userInfo);
            location.replace("/dashboard")
        })
       .catch(err =>  $("#alert").append(alert)
                // console.log("Your password or username incorrect!"+err));
       )
    
          console.log("login.js Linked!");

    })


});
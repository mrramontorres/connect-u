/*------navbar----------*/

// const startup = require("../../models/startup");

$("[data-menu-underline-from-center] a").addClass("underline-from-center");

/*-----------------navbarend-----------*/

/*-----------callout----------*/

$(function () {
  $("[data-callout-hover-reveal]").hover(
    function () {
      $(this).find(".callout-footer").slideDown(250);
    },
    function () {
      $(this).find(".callout-footer").slideUp(250);
    }
  );
});

/*----------------table----------------*/
$("[data-open-details]").click(function (e) {
  e.preventDefault();
  $(this).next().toggleClass("is-active");
  $(this).toggleClass("is-active");
});

// To get the startups to render.
// const allSU = document.querySelectorAll("#suDisplay");
function fetchData() {
  fetch("/startup")
    .then((response) => {
      // Check that the response is all good
      if (!response.ok) {
        throw ERROR("Error");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      document.querySelector("#suDisplay").insertAdjacentElement("beforeend");
      // Reload the page so the user can see the new burger
      if (data.ok) {
        console.log("Is this working?");
        location.reload("/startup");
      } else {
        alert("something went wrong!");
      }
    })
    .catch(error=> {
      console.log(error);
    });
}

fetchData();

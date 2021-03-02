//Interact with database to add more data into it

// Helper functions to show/hide elements
const show = (el) => {
  el.style.display = "block";
};

// Wait for the DOM to completely load before we run our JS
document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM loaded! 🚀");
  const getStartup = (id, type) => {
    const queryUrl = `/api/startups/`;

    fetch("/api/startups", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data) {
          console.log("before");
          console.log("Success in getting startup:", data);

          // // Populate the form for editing
          // titleInput.value = data.title;
          // bodyInput.value = data.body;
          // StartupId = data.StartupId || data.id;

          // // We are updating
          // updating = true;
        }
      })
      .catch((err) => console.error(err));
  };

  getStartup();

  // Get references to the body, title, form and author
  const bodyInput = document.getElementById("body");
  const titleInput = document.getElementById("title");
  const cmsForm = document.getElementById("cms");
  //const startupSelect = document.getElementById("startup");

  // Get query parameter
  const url = window.location.search;
  let postId;
  let StartupId;
  let updating = false;

  // Get post data for editing/adding
  const getPostData = (id, type) => {
    const queryUrl =
      type === "post" ? `/api/posts/${id}` : `/api/startups/${id}`;

    fetch(queryUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          console.log("Success in getting post:", data);

          // Populate the form for editing
          titleInput.value = data.title;
          bodyInput.value = data.body;
          StartupId = data.StartupId || data.id;

          // We are updating
          updating = true;
        }
      })
      .catch((err) => console.error(err));
  };

  //If post exists, grab the content of the post
  if (url.indexOf("?post_id=") !== -1) {
    postId = url.split("=")[1];
    getPostData(postId, "post");
  }
  // Otherwise if we have an author_id in our url, preset the author select box to be our Author
  else if (url.indexOf("?startup_id=") !== -1) {
    StartupId = url.split("=")[1];
  }

  // Event handler for when the post for is submitted
  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Make sure the form isn't empty
    if (
      !titleInput.value.trim() ||
      !bodyInput.value.trim()
      //!startupSelect.value
    ) {
      return;
    }

    // Object that will be sent to the db
    const newPost = {
      title: titleInput.value.trim(),
      body: bodyInput.value.trim(),
      // StartupId: startupSelect.value,
    };

    // Update a post if flag is true, otherwise submit a new one
    if (updating) {
      newPost.id = postId;
      updatePost(newPost);
    } else {
      submitPost(newPost);
      console.log(newPost);
    }
  };

  // Attach an event listener to the form on submit
  cmsForm.addEventListener("submit", handleFormSubmit);

  // Submits new post then redirects
  const submitPost = (post) => {
    fetch("/api/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(post),
    })
      .then((res) => {
        console.log(res);
        window.location.href = "/blog";
        console.log(post);
      })
      .catch((err) => console.error(err));
  };
});

// Render a list of authors or redirect if no authors
// const renderStartupsList = (data) => {
//   console.log("renderStartupList -> data", data);
//   if (!data.length) {
//     window.location.href = "/startups";
//   }
//   if (document.querySelector(".hidden")) {
//     show(document.querySelector(".hidden"));
//   }

//   const rowsToAdd = [];

//   data.forEach((Startup) => rowsToAdd.push(createStartupRow(Startup)));

//   startupSelect.innerHTML = "";
//   console.log("renderStartupList -> rowsToAdd", rowsToAdd);
//   console.log("startupSelect", startupSelect);

//   rowsToAdd.forEach((row) => startupSelect.append(row));
//   startupSelect.value = StartupId;
// };

// // Build author dropdown
// const createStartupRow = ({ id, name }) => {
//   const listOption = document.createElement("option");
//   listOption.value = id;
//   listOption.textContent = name;
//   return listOption;
// };

// A function to get Authors and then call the render function
// const getStartups = () => {
//   fetch("api/startups", {
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json",
//     },
//   })
//     .then((response) => response.json())
//     .then((data) => renderStartupsList(data))
//     .catch((err) => console.error(err));
// };

// Get the authors, and their posts
//   getStartups();

//   // Update a post then redirect to blog
//   const updatePost = (post) => {
//     fetch("/api/posts", {
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(post),
//     })
//       .then(() => {
//         window.location.href = "/blog";
//       })
//       .catch((err) => console.error(err));
//   };
// });

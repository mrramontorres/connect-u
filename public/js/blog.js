// Wait for the DOM to completely load before we run our JS
document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM loaded! 🚀");

  const blogContainer = document.querySelector(".blog-container");

  // Variable to hold our posts
  let posts;

  const getPosts = (startup) => {
    StartupId = startup || "";
    if (StartupId) {
      StartupId = `/?startup_id=${StartupId}`;
    }

    fetch(`/api/posts${StartupId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        posts = data;
        console.log("Success in getting posts:", data);
        initializeRows();
      })
      .catch((error) => console.error("Error:", error));

    // Get a blog post from a specific author
    const url = window.location.search;
    let StartupId;
    if (url.indexOf("?startup_id=") !== -1) {
      StartupId = url.split("=")[1];
      getPosts(StartupId);
    } else {
      getPosts();
    }

    const initializeRows = () => {
      blogContainer.innerHTML = "";
      const postsToAdd = [];

      posts.forEach((post) => postsToAdd.push(createNewRow(post)));
      postsToAdd.forEach((post) => blogContainer.append(post));
    };

    const createNewRow = (post) => {
      console.log("createNewRow -> post", post);

      const newPostCard = document.createElement("div");
      newPostCard.classList.add("card");

      const newPostCardHeading = document.createElement("div");
      newPostCardHeading.classList.add("card-header");

      const newPostCardBody = document.createElement("div");
      newPostCardBody.classList.add("card-body");

      const newPostBody = document.createElement("p");
      newPostBody.textContent = Post.body;

      const newPostImage = document.createElement("img");
      newPostImage.classList.add("card-img-top");

      const newPostCardTitle = document.createElement("h2");
      newPostCardTitle.classList.add("card-title");
      newPostCardTitle.textContent = post.title;

      const newPostStartup = document.createElement("h5");

      newPostStartup.textContent = `Written by: ${post.Startup.name}`;
      newPostStartup.style.float = "right";
      newPostStartup.style.color = "blue";
      newPostStartup.style.marginTop = "-10px";

      newPostCardHeading.append(newPostCardTitle);
      newPostCardHeading.append(newPostStartup);
      newPostCardBody.append(newPostBody);
      newPostCard.append(newPostImage);
      newPostCard.append(newPostCardHeading);
      newPostCard.append(newPostCardBody);
      newPostCard.setAttribute("data-post", JSON.stringify(post));

      console.log("newPostCard", newPostCard);
      return newPostCard;
    };
  };

  //   if (!data || !data.length) {
  //     displayEmpty(startup);
  //   } else {
  //     initializeRows();
  //   }
  // })
  // .catch((error) => console.error("Error:", error));
  // };

  //Get a blog post from a specific author

  // // Front end call to DELETE a post
  // const deletePost = (id) => {
  //   fetch(`/api/posts/${id}`, {
  //     method: 'DELETE',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   }).then(getPosts());
  // };
});

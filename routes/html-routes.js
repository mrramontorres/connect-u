// Dependencies
const path = require("path");

// Routes
module.exports = (app) => {
  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  app.get("/", (req, res) =>
    res.sendFile(path.join(__dirname, "../public/blog.html"))
<<<<<<< HEAD
=======
  );

  app.get("/blog", (req, res) =>
    res.sendFile(path.join(__dirname, "../public/blog.html"))
>>>>>>> a6af3a3596a3be0702f2149b9c4fff62b35ddfb2
  );

  app.get("/blog", (req, res) =>
    res.sendFile(path.join(__dirname, "../public/blog.html"))

  );

  // second route loads second.html
  app.get("/cms", (req, res) =>
    //console.log("GET second html not read yet")
    res.sendFile(path.join(__dirname, "../public/cms.html"))
  );

  // third route loads third.html
  app.get("/authors", (req, res) =>
    //console.log("GET third html not read yet")
    res.sendFile(path.join(__dirname, "../public/author-manager.html"))
  );
};

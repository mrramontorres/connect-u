// Dependencies
const path = require("path");

const db = require("../models");


// Routes
module.exports = (app) => {
  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  app.get("/", (req, res) => res.render("indexintro"));



  app.get("/login", (req, res) =>
    res.render("login-signup")
  );

  app.get("/register1", (req, res) =>
    res.render("register1-vc")
  );

  app.get("/register2", (req, res) =>
    res.render("register2-startups")
  );

  app.get("/browser", function(req, res) {
    db.vc_profile.findAll().then(function(vcs) {
      console.log(vcs);
      res.render("browser", {vcs: vcs});
    });


  });

  app.get("/vc", (req, res) =>
    res.render("vc")
  );

  app.get("/startup", (req, res) =>
    res.render("startup")
  );
  app.get("/login", (req, res) => res.render("login-signup"));

  app.get("/blog", (req, res) =>
    res.sendFile(path.join(__dirname, "../views/blog.html"))
  );

  // second route loads second.html
  app.get("/cms", (req, res) =>
    //console.log("GET second html not read yet")
    res.sendFile(path.join(__dirname, "../views/cms.html"))
  );

  // third route loads third.html
  app.get("/startups", (req, res) =>
    //console.log("GET third html not read yet")
    res.sendFile(path.join(__dirname, "../public/author-manager.html"))
  );
};

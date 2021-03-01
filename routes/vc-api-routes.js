// Dependencies

// Requiring our models
const db = require("../models");

// Routes
module.exports = (app) => {
  app.get("/api/vc", (req, res) => {
    console.log("vc-api-routes activated");
    const query = {};
    if (req.query.Startup_id) {
      query.StartupId = req.query.Startup_id;
    }
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Author
    db.Post.findAll({
      where: query,
      include: [db.startup_profile],
    }).then((dbPost) => res.json(dbPost));
  });
};

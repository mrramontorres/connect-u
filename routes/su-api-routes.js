// Dependencies

// Requiring our models
const db = require("../models");

// Routes
module.exports = (app) => {
  app.get("/api/posts", (req, res) => {
    console.log("su-api-routes activated");
    const query = {};
    if (req.query.startup_id) {
      query.StartupId = req.query.startup_id;
    }
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Author
    db.Startup.findOne({
      where: query,
      include: [db.Startup],
    }).then((dbStartup) => res.json(dbStartup));
  });

  app.get("/api/startups", (req, res) => {
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    db.Startup.findAll({
      include: [db.Post],
    }).then((dbStartup) => res.json(dbStartup));
  });

  app.get("/api/startups/:id", (req, res) => {
    // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    db.Startup.findOne({
      where: {
        id: req.params.id,
      },
      include: [db.Post],
    }).then((dbStartup) => res.json(dbStartup));
  });

  app.post("/api/startups", (req, res) => {
    db.Startup.create(req.body).then((dbStartup) => res.json(dbStartup));
  });

  app.delete("/api/startups/:id", (req, res) => {
    db.Startup.destroy({
      where: {
        id: req.params.id,
      },
    }).then((dbStartup) => res.json(dbStartup));
  });
};

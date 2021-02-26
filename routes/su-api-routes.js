// Dependencies

// Requiring our models
const db = require("../models");

// Routes
module.exports = (app) => {
  // app.get("/api/startups", (req, res) => {
  //   console.log("su-api-routes activated");
  //   const query = {};
  //   if (req.query.startup_id) {
  //     query.StartupId = req.query.startup_id;
  //   }
  // });

  // Get route for retrieving startup data
  app.get("/api/startups/:id", (req, res) => {
    db.Startup.findOne({
      where: {
        id: req.params.id,
      },
    }).then((dbStartup) => res.json(dbStartup));
  });

  // POST route for saving a new startup
  app.post("/api/", (req, res) => {
    db.Startup.create(req.body).then((dbStartup) => res.json(dbStartup));
  });

  // DELETE route for deleting a startup
  app.delete("/api/startups/:id", (req, res) => {
    db.Startup.destroy({
      where: {
        id: req.params.id,
      },
    }).then((dbStartup) => res.json(dbStartup));
  });

  // PUT route for updating startup information
  // Grabs id
  app.put("/api/startups", (req, res) => {
    db.Startup.update(req.body, {
      where: {
        id: req.params.id,
      },
    }).then((dbStartup) => res.json(dbStartup));
  });
};


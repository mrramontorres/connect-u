// Dependencies

// Requiring our models
const db = require('../models');

// Routes
module.exports = (app) => {
  app.get('/api/posts', (req, res) => {
    console.log("su-api-routes activated")
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
}
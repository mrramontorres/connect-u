// Dependencies

// Requiring our models
const db = require('../models/startup.js');

// Routes
module.exports = (app) => {
  app.get('/api/posts', (req, res) => {
    console.log("su-api-routes activated")
/*    const query = {};
    if (req.query.author_id) {
      query.AuthorId = req.query.author_id;
    }
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Author
    db.Post.findAll({
      where: query,
      include: [db.Author],
    }).then((dbPost) => res.json(dbPost));
*/
  });
}
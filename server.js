require("dotenv").config();
var passport = require("./config/passport");

const express = require("express");

const htmlRouter = require("./routes/html-routes.js");
const vcRouter = require("./routes/vc-api-routes.js");
const suRouter = require("./routes/su-api-routes.js");
const postRouter = require("./routes/post-api-routes.js");
// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 8082;

// Requiring our models for syncing
const db = require("./models");

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static("public"));
// We need to use sessions to keep track of our user's login status
//app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// Set Handlebars.
const exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Invoke routes
htmlRouter(app);
vcRouter(app);
suRouter(app);
postRouter(app);

// Syncing our sequelize models and then starting our Express app
db.sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));
});

// comment

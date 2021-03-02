// Dependencies
// const express = require("express");
// const router = express.Router();
// Requiring our models
const db = require("../models");

// Routes
module.exports = (app) => {
  app.get("/api/startup", (req, res) => {
    console.log("su-api-routes activated");
    const query = {};
    if (req.query.startup_id) {
      query.StartupId = req.query.startup_id;
    }
  });

  app.get("/startup", (req, res) => {
    console.log("su-api-routes activated");

    db.startupProfiles.create({
      startup_name: "Omada Health",
      startup_website: "https://www.omadahealth.com/",
      startup_city: "San Francisco",
      startup_state: "California",
      startup_industry: "Digital Health",
      startup_stage: "Series E",
    }),

    db.startupProfiles.create({
      startup_name: "Beyond Meat",
      startup_website: "https://www.beyondmeat.com/",
      startup_city: "San Francisco",
      startup_state: "California",
      startup_industry: "Food Teach",
      startup_stage: "Public",
    }),
    db.startupProfiles.create({
      startup_name: "Chime",
      startup_website: "https://www.chime.com/",
      startup_city: "San Francisco",
      startup_state: "California",
      startup_industry: "FinTech",
      startup_stage: "Series F",
    }),
    db.startupProfiles.create({
      startup_name: "Snapsheet",
      startup_website: "https://www.snapsheetclaims.com/",
      startup_city: "Chicago",
      startup_state: "Illinois",
      startup_industry: "InsurTech",
      startup_stage: "Series E",
    }),
    db.startupProfiles.findAll({}).then((data) => {
      console.log("Something");
      console.log("these are the profiles", db.startupProfiles);
      console.log("Data is:", data);
      res.render("client", { startupProfile: data });
    });
  });

  // Get route for retrieving startup data
  app.get("/api/startup/:id", (req, res) => {
    db.startupProfiles
      .findOne({
        where: {
          id: req.params.id,
        },
      })
      .then((dbStartup) => res.json(dbStartup));
  });

  // POST route for saving a new startup
  app.post("/api/", (req, res) => {
    db.startupProfiles
      .create(req.body)
      .then((dbStartup) => res.json(dbStartup));
  });

  // DELETE route for deleting a startup
  app.delete("/api/startup/:id", (req, res) => {
    db.startupProfiles
      .destroy({
        where: {
          id: req.params.id,
        },
      })
      .then((dbStartup) => res.json(dbStartup));
  });

  // PUT route for updating startup information
  // Grabs id
  app.put("/api/startup", (req, res) => {
    db.startupProfiles
      .update(req.body, {
        where: {
          id: req.params.id,
        },
      })
      .then((dbStartup) => res.json(dbStartup));
  });
};

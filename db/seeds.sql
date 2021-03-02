USE connect_u_DB; 

<<<<<<< HEAD
INSERT INTO startup_profile (startup_name, startup_website, startup_city, startup_state, startup_industry, startup_stage) VALUES ("Snapsheet","https://www.snapsheetclaims.com/", "Chicago", "Illinois", "InsurTech", "Series E");
INSERT INTO startup_profile (startup_name, startup_website, startup_city, startup_state, startup_industry, startup_stage) VALUES ("Omada Health","https://www.omadahealth.com/", "San Francisco", "California", "Digital Health", "Series E");
INSERT INTO startup_profile (startup_name, startup_website, startup_city, startup_state, startup_industry, startup_stage) VALUES ("Chime","https://www.chime.com/", "San Francisco", "California", "FinTech", "Series F");
INSERT INTO startup_profile (startup_name, startup_website, startup_city, startup_state, startup_industry, startup_stage) VALUES ("Beyond Meat","https://www.beyondmeat.com/", "Manhattan Beach", "California", "Food Teach", "Public");
=======
-- If _  apears in your column fields mySQL database use this: --

INSERT INTO startup_profiles (startup_name, startup_website, startup_city, startup_state, startup_industry, startup_stage,startup_notes,startup_status, createdAt, updatedAt)  VALUES ("Snapsheet","https://www.snapsheetclaims.com/", "Chicago", "Illinois", "InsurTech", "Series E","Good startup notes","Status TBD",cast(now() as datetime), cast(now() as datetime));

-- If not then use this seed: --

INSERT INTO startup_profiles (startupName, startupWebsite, startupCity, startupState, startupIndustry, startupStage,startupNotes,startupStatus, createdAt, updatedAt)  VALUES ("Snapsheet","https://www.snapsheetclaims.com/", "Chicago", "Illinois", "InsurTech", "Series E","Good startup notes","Status TBD",cast(now() as datetime), cast(now() as datetime));
>>>>>>> 158c4e6e17777ae3c768850fa6516d6a01fcee0d

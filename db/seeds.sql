USE connect_u_DB; 

-- If _  apears in your column fields mySQL database use this: --

INSERT INTO startup_profiles (startupName, startupWebsite, startupCity, startupState, startupIndustry, startupStage,startupNotes,startupStatus, createdAt, updatedAt)  VALUES ("Snapsheet","https://www.snapsheetclaims.com/", "Chicago", "Illinois", "InsurTech", "Series E","Good startup notes","Status TBD",cast(now() as datetime), cast(now() as datetime));

-- If not then use this seed: --

INSERT INTO startup_profiles (startupName, startupWebsite, startupCity, startupState, startupIndustry, startupStage,startupNotes,startupStatus, createdAt, updatedAt)  VALUES ("Snapsheet","https://www.snapsheetclaims.com/", "Chicago", "Illinois", "InsurTech", "Series E","Good startup notes","Status TBD",cast(now() as datetime), cast(now() as datetime));

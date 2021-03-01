USE connect_u_DB; 

INSERT INTO startup_profiles (startup_name, startup_website, startup_city, startup_state, startup_industry, startup_stage,startup_notes,startup_status, createdAt, updatedAt)  VALUES ("Snapsheet","https://www.snapsheetclaims.com/", "Chicago", "Illinois", "InsurTech", "Series E","Good startup notes","Status TBD",cast(now() as datetime), cast(now() as datetime));
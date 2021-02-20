DROP DATABASE IF EXISTS connet_u_DB;

CREATE DATABASE connet_u_DB;

USE connet_u_DB;

CREATE TABLE vc_profile (
  id INT NOT NULL AUTO_INCREMENT,
  vc_name VARCHAR(60) NOT NULL,
  vc_website VARCHAR(100) NOT NULL,
  vc_city VARCHAR(30) NOT NULL,
  vc_state VARCHAR(10) NOT NULL,
  vc_industries VARCHAR(60) NOT NULL,
  vc_stage VARCHAR(20) NOT NULL,
  vc_lead BOOLEAN NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE startup_profile (
  id INT NOT NULL AUTO_INCREMENT,
  startup_name VARCHAR(30) NOT NULL,
  startup_website VARCHAR(100) NOT NULL,
  startup_city VARCHAR(30) NOT NULL,
  startup_state VARCHAR(10) NOT NULL,
  startup_industry VARCHAR(60) NOT NULL, 
  startup_stage VARCHAR(20) NOT NULL,
  startup_priority VARCHAR(20) NOT NULL,
  startup_notes VARCHAR(180) NOT NULL,
  startup_status VARCHAR(180) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE interactions (
  id INT NOT NULL AUTO_INCREMENT,
  interactionDate VARCHAR(30) NOT NULL,
  PRIMARY KEY (id)
);
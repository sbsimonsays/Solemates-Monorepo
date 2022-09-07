DROP DATABASE IF EXISTS solemates_sbs;
CREATE DATABASE solemates_sbs; 

\c solemates_sbs; 

CREATE TABLE apparels (
    id SERIAL PRIMARY KEY, 
    name TEXT NOT NULL,
    shoesize INTEGER,
    budget INTEGER, 
    color TEXT, 
    image TEXT
);

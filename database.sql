-- Don't forget to add your create table SQL 
-- It is also helpful to include some test data

-- create db
CREATE DATABASE "react_shopping_list"

-- create table
CREATE TABLE "shopping_list"(
"id" serial primary key,
"name" varchar(80) NOT NULL,
"quantity" DECIMAL NOT NULL,
"unit" VARCHAR(20)
);

-- sample data
INSERT INTO "shopping_list"("name", "quantity", "unit")
VALUES ('apples', '5', 'lbs'),
('bread', '1', 'loaf'),
('milk', '1', 'gallon'),
('sliced almonds', '2', 'cups'),
('bananas', '1', 'bunch');
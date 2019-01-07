USE g5xemu955akjytx2;

CREATE TABLE burgers (
	id INT AUTO_INCREMENT NOT NULL ,
	burger_name varchar(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
    createdAt TIMESTAMP NOT NULL,
	PRIMARY KEY (id)
);

INSERT INTO burgers (burger_name) VALUES 
    ('Cheese Plate'),
    ('Big Salad'),
    ('Tuna Tartare'),
    ('Deviled Eggs');
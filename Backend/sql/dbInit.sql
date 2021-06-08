CREATE TABLE IF NOT EXISTS ingredient_storage (
    type VARCHAR(20) PRIMARY KEY,
    storage_env VARCHAR(20)
);

CREATE TABLE IF NOT EXISTS dish_info (
    name VARCHAR(60) PRIMARY KEY,
    description VARCHAR(255),
    price REAL
);

CREATE TABLE IF NOT EXISTS menu (
    name VARCHAR(60) PRIMARY KEY,
    description VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS address_info (
    city VARCHAR(40),
    street_name VARCHAR(255),
    postal_code VARCHAR(6),
    PRIMARY KEY(street_name, city)
);

CREATE TABLE IF NOT EXISTS restaurant (
    res_id INT PRIMARY KEY,
    name VARCHAR(60),
    city VARCHAR(40),
    street_name VARCHAR(255),
    FOREIGN KEY (city, street_name) REFERENCES address_info(city, street_name)
        ON UPDATE NO ACTION
        ON DELETE SET NULL
);

CREATE TABLE IF NOT EXISTS promotion (
    prom_id serial PRIMARY KEY,
    res_id INT NOT NULL,
    description VARCHAR(255),
    name VARCHAR(40),
    amountOff REAL,
    FOREIGN KEY (res_id) REFERENCES restaurant(res_id)
        ON UPDATE CASCADE
        ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS restaurant_menu (
    res_id INT,
    menu_name VARCHAR(20),
    PRIMARY KEY (res_id, menu_name),
    FOREIGN KEY (res_id) REFERENCES restaurant(res_id)
        ON UPDATE CASCADE
        ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS manager (
    eid INT,
    employment_date TIMESTAMP,
    salary REAL,
    name VARCHAR(50),
    res_id INT NOT NULL,
    Managesres_id INT,
    city VARCHAR(40),
    street_name VARCHAR(255),
    PRIMARY KEY (eid),
    FOREIGN KEY (res_id) REFERENCES restaurant(res_id)
        ON UPDATE CASCADE
        ON DELETE SET NULL,
    FOREIGN KEY (Managesres_id) REFERENCES restaurant(res_id)
        ON UPDATE CASCADE
        ON DELETE SET NULL,
    FOREIGN KEY (city, street_name) REFERENCES address_info(city, street_name)
        ON UPDATE NO ACTION
        ON DELETE SET NULL
);

CREATE TABLE IF NOT EXISTS waiter (
    eid INT PRIMARY KEY,
    employment_date TIMESTAMP,
    salary REAL,
    name VARCHAR(50),
    res_id INT NOT NULL,
    city VARCHAR(40),
    street_name VARCHAR(255),
    FOREIGN KEY (res_id) REFERENCES restaurant(res_id)
        ON UPDATE CASCADE
        ON DELETE SET NULL,
    FOREIGN KEY (city, street_name) REFERENCES address_info(city, street_name)
        ON UPDATE CASCADE
        ON DELETE SET NULL
);

CREATE TABLE IF NOT EXISTS chef (
    eid INT,
    employment_date TIMESTAMP,
    salary REAL,
    name VARCHAR(50),
    res_id INT NOT NULL,
    city VARCHAR(40),
    street_name VARCHAR(255),
    PRIMARY KEY (eid),
    FOREIGN KEY (res_id) REFERENCES restaurant(res_id)
        ON UPDATE CASCADE
        ON DELETE SET NULL,
    FOREIGN KEY (city, street_name) REFERENCES address_info(city, street_name)
        ON UPDATE CASCADE
        ON DELETE SET NULL
);

CREATE TABLE IF NOT EXISTS chef_dish_info (
    eid INT,
    dish_name VARCHAR(60),
    PRIMARY KEY (eid, dish_name),
    FOREIGN KEY (eid) REFERENCES chef(eid)
        ON DELETE SET NULL
        ON UPDATE CASCADE,
    FOREIGN KEY (dish_name) REFERENCES dish_info(name)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);

CREATE TABLE IF NOT EXISTS ingredient (
    name VARCHAR(20),
    amount INT,
    dish_info_name VARCHAR(60),
    unit VARCHAR(10) NOT NULL,
    type VARCHAR(20),
    PRIMARY KEY (name, dish_info_name),
    FOREIGN KEY (dish_info_name) REFERENCES dish_info(name)
        ON DELETE CASCADE
        ON UPDATE CASCADE,
    FOREIGN KEY (type) REFERENCES ingredient_storage(type)
        ON DELETE NO ACTION
        ON UPDATE CASCADE
);

CREATE TABLE IF NOT EXISTS restaurant_order (
    oid INT,
    status VARCHAR(50),
    created_on TIMESTAMP,
    waiter_id INT not null,
    PRIMARY KEY (oid),
    FOREIGN KEY (waiter_id) REFERENCES waiter(eid)
        ON DELETE SET NULL
        ON UPDATE CASCADE
);

CREATE TABLE IF NOT EXISTS dish_order_item (
    dish_id INT PRIMARY KEY,
    order_id INT,
    description VARCHAR(255),
    amount REAL,
    status VARCHAR(15),
    dish_info_name VARCHAR(60),
    chef_id INT,
    FOREIGN KEY (order_id) REFERENCES restaurant_order(oid)
        ON DELETE SET NULL
        ON UPDATE CASCADE,
    FOREIGN KEY (chef_id) REFERENCES chef(eid)
        ON DELETE SET NULL
        ON UPDATE CASCADE,
    FOREIGN KEY (dish_info_name) REFERENCES dish_info(name)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);

CREATE TABLE IF NOT EXISTS menu_dish_info (
menu_name VARCHAR(60),
dish_info_name VARCHAR(60),
PRIMARY KEY (menu_name, dish_info_name),
FOREIGN KEY (menu_name) REFERENCES menu(name)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
FOREIGN KEY (dish_info_name) REFERENCES dish_info(name)
    ON DELETE CASCADE
    ON UPDATE CASCADE
);

INSERT INTO address_info VALUES ('Vancouver', '101 - 6111 University Blvd', 'V6T1Z3');
INSERT INTO restaurant VALUES('1','3 Star Restaurant', 'Vancouver', '101 - 6111 University Blvd');

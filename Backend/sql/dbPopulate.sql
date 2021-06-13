INSERT INTO promotion(prom_id,res_id,description,name,amountoff) VALUES (1,1,'30% discount on next order','Combo Deal',0.3) ON CONFLICT DO NOTHING;
INSERT INTO promotion(prom_id,res_id,description,name,amountoff) VALUES (2,1,'50% discount on next order','Two for one coupon',0.2) ON CONFLICT DO NOTHING;
INSERT INTO promotion(prom_id,res_id,description,name,amountoff) VALUES (3,2,'20% Off Referal Bonus','Referral Bonus',0.2) ON CONFLICT DO NOTHING;
INSERT INTO promotion(prom_id,res_id,description,name,amountoff) VALUES (4,3,'10% discount on orders above $100','Happy Week',0.1) ON CONFLICT DO NOTHING;
INSERT INTO promotion(prom_id,res_id,description,name,amountoff) VALUES (5,4,'15% Holiday offer discount','Holiday Offer',0.15) ON CONFLICT DO NOTHING;

INSERT INTO restaurant(res_id,name,city,street_name) VALUES (1,'Taste Of Thai','Vancouver','3629 W Broadway') ON CONFLICT DO NOTHING;
INSERT INTO restaurant(res_id,name,city,street_name) VALUES (2,'Banana Leaf','Vancouver','3005 W Broadway') ON CONFLICT DO NOTHING;
INSERT INTO restaurant(res_id,name,city,street_name) VALUES (3,'Banana Leaf','Vancouver','820 W Broadway') ON CONFLICT DO NOTHING;
INSERT INTO restaurant(res_id,name,city,street_name) VALUES (4,'La Taqueria','Vancouver','2450 Yukon St') ON CONFLICT DO NOTHING;
INSERT INTO restaurant(res_id,name,city,street_name) VALUES (5,'Sesame','Vancouver','6111 University Blvd') ON CONFLICT DO NOTHING;

INSERT INTO address_info(city,street_name,postal_code) VALUES ('Vancouver','3629 W Broadway','V6R2B8') ON CONFLICT DO NOTHING;
INSERT INTO address_info(city,street_name,postal_code) VALUES ('Vancouver','3005 W Broadway','V5Z1J9') ON CONFLICT DO NOTHING;
INSERT INTO address_info(city,street_name,postal_code) VALUES ('Vancouver','820 W Broadway','V6K2G9') ON CONFLICT DO NOTHING;
INSERT INTO address_info(city,street_name,postal_code) VALUES ('Vancouver','2450 Yukon St','V5Y0A4') ON CONFLICT DO NOTHING;
INSERT INTO address_info(city,street_name,postal_code) VALUES ('Vancouver','6111 University Blvd','V6T0C7') ON CONFLICT DO NOTHING;
INSERT INTO address_info(city,street_name,postal_code) VALUES ('Surrey','8282 Avenue','G1V5X1') ON CONFLICT DO NOTHING;
INSERT INTO address_info(city,street_name,postal_code) VALUES ('Burnaby','1205 Avenue','P5L4A2') ON CONFLICT DO NOTHING;
INSERT INTO address_info(city,street_name,postal_code) VALUES ('North Vancouver','9124 Street','Z1C2F4') ON CONFLICT DO NOTHING;
INSERT INTO address_info(city,street_name,postal_code) VALUES ('Burnaby','1183 Street','E5X4T1') ON CONFLICT DO NOTHING;
INSERT INTO address_info(city,street_name,postal_code) VALUES ('Surrey','4104 Avenue','V1Q7S1') ON CONFLICT DO NOTHING;
INSERT INTO address_info(city,street_name,postal_code) VALUES ('Burnaby','4570 Avenue','T7R7E7') ON CONFLICT DO NOTHING;
INSERT INTO address_info(city,street_name,postal_code) VALUES ('North Vancouver','3016 Avenue','G5N7L3') ON CONFLICT DO NOTHING;
INSERT INTO address_info(city,street_name,postal_code) VALUES ('North Vancouver','8073 Street','F8D6I3') ON CONFLICT DO NOTHING;
INSERT INTO address_info(city,street_name,postal_code) VALUES ('North Vancouver','1375 Blvd','N1F5C5') ON CONFLICT DO NOTHING;
INSERT INTO address_info(city,street_name,postal_code) VALUES ('Surrey','7094 Avenue','A8F4Y2') ON CONFLICT DO NOTHING;
INSERT INTO address_info(city,street_name,postal_code) VALUES ('Richmond','3978 Avenue','S3Z4A9') ON CONFLICT DO NOTHING;
INSERT INTO address_info(city,street_name,postal_code) VALUES ('Surrey','9707 Blvd','L1N7T6') ON CONFLICT DO NOTHING;
INSERT INTO address_info(city,street_name,postal_code) VALUES ('Richmond','6476 Blvd','J1V7Q4') ON CONFLICT DO NOTHING;
INSERT INTO address_info(city,street_name,postal_code) VALUES ('Burnaby','5906 Street','M6T6A2') ON CONFLICT DO NOTHING;
INSERT INTO address_info(city,street_name,postal_code) VALUES ('Burnaby','8890 Street','U5P7X3') ON CONFLICT DO NOTHING;
INSERT INTO address_info(city,street_name,postal_code) VALUES ('Vancouver','4289 Street','N8V6D8') ON CONFLICT DO NOTHING;
INSERT INTO address_info(city,street_name,postal_code) VALUES ('Burnaby','2250 Blvd','M9L7K9') ON CONFLICT DO NOTHING;
INSERT INTO address_info(city,street_name,postal_code) VALUES ('North Vancouver','4269 Blvd','E7P6W2') ON CONFLICT DO NOTHING;
INSERT INTO address_info(city,street_name,postal_code) VALUES ('Vancouver','2484 Blvd','Q4F6A9') ON CONFLICT DO NOTHING;
INSERT INTO address_info(city,street_name,postal_code) VALUES ('Vancouver','5166 Street','J6L6N2') ON CONFLICT DO NOTHING;
INSERT INTO address_info(city,street_name,postal_code) VALUES ('North Vancouver','1423 Street','L2F6A2') ON CONFLICT DO NOTHING;
INSERT INTO address_info(city,street_name,postal_code) VALUES ('Richmond','9032 Avenue','H7E2U8') ON CONFLICT DO NOTHING;
INSERT INTO address_info(city,street_name,postal_code) VALUES ('Richmond','9340 Street','L1V8R1') ON CONFLICT DO NOTHING;
INSERT INTO address_info(city,street_name,postal_code) VALUES ('North Vancouver','9875 Blvd','Z7D3A3') ON CONFLICT DO NOTHING;
INSERT INTO address_info(city,street_name,postal_code) VALUES ('Burnaby','6755 Street','N7A4W4') ON CONFLICT DO NOTHING;
INSERT INTO address_info(city,street_name,postal_code) VALUES ('North Vancouver','5370 Blvd','D5Y8L1') ON CONFLICT DO NOTHING;

INSERT INTO restaurant_menu(res_id,menu_name) VALUES (1,'Starters') ON CONFLICT DO NOTHING;
INSERT INTO restaurant_menu(res_id,menu_name) VALUES (3,'Starters') ON CONFLICT DO NOTHING;
INSERT INTO restaurant_menu(res_id,menu_name) VALUES (3,'Brunch') ON CONFLICT DO NOTHING;
INSERT INTO restaurant_menu(res_id,menu_name) VALUES (1,'Brunch') ON CONFLICT DO NOTHING;
INSERT INTO restaurant_menu(res_id,menu_name) VALUES (4,'HappyHour') ON CONFLICT DO NOTHING;

INSERT INTO menu(name,description) VALUES ('Starters','Small quantities of food served as the first course of the meal') ON CONFLICT DO NOTHING;
INSERT INTO menu(name,description) VALUES ('Brunch','Late morning meals served between 11-3pm') ON CONFLICT DO NOTHING;
INSERT INTO menu(name,description) VALUES ('Happy Hour','Drinks and Meals at discounted prices between 5-9pm every weekday') ON CONFLICT DO NOTHING;
INSERT INTO menu(name,description) VALUES ('Kids','Recommended dishes for children below 10') ON CONFLICT DO NOTHING;
INSERT INTO menu(name,description) VALUES ('Dessert','Sweet courses eaten at the end of the meal') ON CONFLICT DO NOTHING;
INSERT INTO menu(name,description) VALUES ('Power Salads','All the salads to power you through the day') ON CONFLICT DO NOTHING;

INSERT INTO manager(eid,employment_date,salary,name,res_id,managesres_id,city,street_name) VALUES (1,'23-Jun-05',88750,'Kristel Burke',1,1,'Vancouver','6111 University Blvd') ON CONFLICT DO NOTHING;
INSERT INTO manager(eid,employment_date,salary,name,res_id,managesres_id,city,street_name) VALUES (5,'30-Jun-05',72000,'Borislav Montagne',1,2,'Surrey','8282 Avenue') ON CONFLICT DO NOTHING;
INSERT INTO manager(eid,employment_date,salary,name,res_id,managesres_id,city,street_name) VALUES (10,'02-Jan-06',74550,'Pora Cinege',2,3,'Burnaby','1205 Avenue') ON CONFLICT DO NOTHING;
INSERT INTO manager(eid,employment_date,salary,name,res_id,managesres_id,city,street_name) VALUES (11,'25-May-06',81000,'Nora Cardona',3,4,'North Vancouver','9124 Street') ON CONFLICT DO NOTHING;
INSERT INTO manager(eid,employment_date,salary,name,res_id,managesres_id,city,street_name) VALUES (14,'25-Jun-06',68500,'Carel Priestly',4,5,'Burnaby','1183 Street') ON CONFLICT DO NOTHING;

INSERT INTO waiter(eid,employment_date,salary,name,res_id,city,street_name) VALUES (4,'26-Jun-05',28000,'Niketas Benbow',1,'Surrey','4104 Avenue') ON CONFLICT DO NOTHING;
INSERT INTO waiter(eid,employment_date,salary,name,res_id,city,street_name) VALUES (6,'30-Jun-05',31000,'Johann Van Amerscoort',2,'Burnaby','4570 Avenue') ON CONFLICT DO NOTHING;
INSERT INTO waiter(eid,employment_date,salary,name,res_id,city,street_name) VALUES (7,'17-Aug-05',29500,'Debby Bennet',3,'North Vancouver','3016 Avenue') ON CONFLICT DO NOTHING;
INSERT INTO waiter(eid,employment_date,salary,name,res_id,city,street_name) VALUES (9,'9-Oct-05',22000,'Carmina Kolbe',4,'North Vancouver','8073 Street') ON CONFLICT DO NOTHING;
INSERT INTO waiter(eid,employment_date,salary,name,res_id,city,street_name) VALUES (13,'14-Jun-06',28000,'Fido Tomas',5,'North Vancouver','1375 Blvd') ON CONFLICT DO NOTHING;

INSERT INTO chef(eid,employment_date,salary,name,res_id,city,street_name) VALUES (2,'26-Jun-05',30000,'Aelita Moto',1,'Surrey','7094 Avenue') ON CONFLICT DO NOTHING;
INSERT INTO chef(eid,employment_date,salary,name,res_id,city,street_name) VALUES (3,'26-Jun-05',45000,'Marton Kadar',2,'Richmond','3978 Avenue') ON CONFLICT DO NOTHING;
INSERT INTO chef(eid,employment_date,salary,name,res_id,city,street_name) VALUES (8,'2-Aug-05',41000,'Stanislav Salvage',3,'Surrey','9707 Blvd') ON CONFLICT DO NOTHING;
INSERT INTO chef(eid,employment_date,salary,name,res_id,city,street_name) VALUES (12,'09-Jun-06',27000,'Gunnhild Kirby',4,'Richmond','6476 Blvd') ON CONFLICT DO NOTHING;
INSERT INTO chef(eid,employment_date,salary,name,res_id,city,street_name) VALUES (15,'29-Jun-06',35000,'Berenike D''Angelo',5,'Burnaby','5906 Street') ON CONFLICT DO NOTHING;

INSERT INTO dish_info(name,description,price) VALUES ('Seasoned Fresh','Fresh seafood seasoned with olive oils', 21.99) ON CONFLICT DO NOTHING;
INSERT INTO dish_info(name,description,price) VALUES ('EntreeB','Action packed thriller! Fun for the whole family', 16.50) ON CONFLICT DO NOTHING;
INSERT INTO dish_info(name,description,price) VALUES ('Fries','Fries. And salt.', 8.99) ON CONFLICT DO NOTHING;
INSERT INTO dish_info(name,description,price) VALUES ('Coattree','Fresh cottage cheese cooked with vegetables', 24.99) ON CONFLICT DO NOTHING;
INSERT INTO dish_info(name,description,price) VALUES ('AppetizerB','This shelf-and-hook storage in black metal has a ledge to keep your things in place.', 18.99) ON CONFLICT DO NOTHING;
INSERT INTO dish_info(name,description,price) VALUES ('Tempura','2pc prawn tempura, cucumber, and crab meat topped with teriyaki sauce & honey mustard', 12.99) ON CONFLICT DO NOTHING;
INSERT INTO dish_info(name,description,price) VALUES ('Marishrimp','An Entree salad of chili and garlic marinated shrimp & lobster meat', 38.99) ON CONFLICT DO NOTHING;
INSERT INTO dish_info(name,description,price) VALUES ('LimeJuice','A well-made version is a fresh mix of lime juice and tequila, with a hint of sweetener', 12.99) ON CONFLICT DO NOTHING;
INSERT INTO dish_info(name,description,price) VALUES ('Coca-cola','Half coca-cola and half water', 6.99) ON CONFLICT DO NOTHING;
INSERT INTO dish_info(name,description,price) VALUES ('Choca','Chocolate ice cream', 5.99) ON CONFLICT DO NOTHING;
INSERT INTO dish_info(name,description,price) VALUES ('Oreo Jar','Whipped Orio cheescake with crushed oreos', 6.99) ON CONFLICT DO NOTHING;

INSERT INTO chef_dish_info(eid,dish_name) VALUES (2,'Seasoned Fresh') ON CONFLICT DO NOTHING;
INSERT INTO chef_dish_info(eid,dish_name) VALUES (2,'EntreeB') ON CONFLICT DO NOTHING;
INSERT INTO chef_dish_info(eid,dish_name) VALUES (2,'Fries') ON CONFLICT DO NOTHING;
INSERT INTO chef_dish_info(eid,dish_name) VALUES (3,'Coattree') ON CONFLICT DO NOTHING;
INSERT INTO chef_dish_info(eid,dish_name) VALUES (12,'AppetizerB') ON CONFLICT DO NOTHING;
INSERT INTO chef_dish_info(eid,dish_name) VALUES (12,'Tempura') ON CONFLICT DO NOTHING;
INSERT INTO chef_dish_info(eid,dish_name) VALUES (15,'Marishrimp') ON CONFLICT DO NOTHING;

INSERT INTO ingredient(name,dish_info_name,amount,unit,type) VALUES ('Potatoes','Fries',100,'g','VegetableRoomTemp') ON CONFLICT DO NOTHING;
INSERT INTO ingredient(name,dish_info_name,amount,unit,type) VALUES ('Potatoes','EntreeB',60,'g','VegetableRoomTemp') ON CONFLICT DO NOTHING;
INSERT INTO ingredient(name,dish_info_name,amount,unit,type) VALUES ('Cucumber','Tempura',100,'g','Vegetable') ON CONFLICT DO NOTHING;
INSERT INTO ingredient(name,dish_info_name,amount,unit,type) VALUES ('Shrimp','Tempura',5,'piece','SeafoodFrozen') ON CONFLICT DO NOTHING;
INSERT INTO ingredient(name,dish_info_name,amount,unit,type) VALUES ('Cottage Cheese','Coattree',35,'g','Diary') ON CONFLICT DO NOTHING;
INSERT INTO ingredient(name,dish_info_name,amount,unit,type) VALUES ('Spotted Shrimp','Seasoned Fresh',4,'piece','SeafoodFresh') ON CONFLICT DO NOTHING;
INSERT INTO ingredient(name,dish_info_name,amount,unit,type) VALUES ('Lobster','Seasoned Fresh',1,'piece','SeafoodFresh') ON CONFLICT DO NOTHING;

INSERT INTO ingredient_storage(type,storage_env) VALUES ('SeafoodFresh','WaterTank') ON CONFLICT DO NOTHING;
INSERT INTO ingredient_storage(type,storage_env) VALUES ('SeafoodFrozen','RefrigeratorFrozen') ON CONFLICT DO NOTHING;
INSERT INTO ingredient_storage(type,storage_env) VALUES ('MeatFresh','Refrigerator') ON CONFLICT DO NOTHING;
INSERT INTO ingredient_storage(type,storage_env) VALUES ('MeatFrozen','RefrigeratorFrozen') ON CONFLICT DO NOTHING;
INSERT INTO ingredient_storage(type,storage_env) VALUES ('Vegetable','Refrigerator') ON CONFLICT DO NOTHING;
INSERT INTO ingredient_storage(type,storage_env) VALUES ('VegetableRoomTemp','RoomTemp') ON CONFLICT DO NOTHING;
INSERT INTO ingredient_storage(type,storage_env) VALUES ('Grain','RoomTemp') ON CONFLICT DO NOTHING;
INSERT INTO ingredient_storage(type,storage_env) VALUES ('Diary','Refrigerator') ON CONFLICT DO NOTHING;
INSERT INTO ingredient_storage(type,storage_env) VALUES ('DrinksRoomTemp','RoomTemp') ON CONFLICT DO NOTHING;
INSERT INTO ingredient_storage(type,storage_env) VALUES ('Drinks','Refrigerator') ON CONFLICT DO NOTHING;

INSERT INTO restaurant_order(OID,status,created_on,waiter_id) VALUES (10001,'Complete','2021-06-01 11:50:32',4) ON CONFLICT DO NOTHING;
INSERT INTO restaurant_order(OID,status,created_on,waiter_id) VALUES (10002,'Complete','2021-06-01 12:10:10',6) ON CONFLICT DO NOTHING;
INSERT INTO restaurant_order(OID,status,created_on,waiter_id) VALUES (10003,'In Progress','2021-06-01 12:11:11',7) ON CONFLICT DO NOTHING;
INSERT INTO restaurant_order(OID,status,created_on,waiter_id) VALUES (10004,'In Progress','2021-06-01 12:15:02',4) ON CONFLICT DO NOTHING;
INSERT INTO restaurant_order(OID,status,created_on,waiter_id) VALUES (10005,'Ready','2021-06-01 12:19:47',13) ON CONFLICT DO NOTHING;

INSERT INTO dish_order_item(dish_id,order_id,description,amount,status,dish_info_name,chef_id) VALUES (10001,10001,NULL,1,'Complete','EntreeB',2) ON CONFLICT DO NOTHING;
INSERT INTO dish_order_item(dish_id,order_id,description,amount,status,dish_info_name,chef_id) VALUES (10002,10001,NULL,1,'Complete','Fries',3) ON CONFLICT DO NOTHING;
INSERT INTO dish_order_item(dish_id,order_id,description,amount,status,dish_info_name,chef_id) VALUES (10003,10001,NULL,2,'Complete','Seasoned Fresh',8) ON CONFLICT DO NOTHING;
INSERT INTO dish_order_item(dish_id,order_id,description,amount,status,dish_info_name,chef_id) VALUES (10004,10002,NULL,1,'Complete','EntreeB',12) ON CONFLICT DO NOTHING;
INSERT INTO dish_order_item(dish_id,order_id,description,amount,status,dish_info_name,chef_id) VALUES (10005,10002,NULL,1,'Complete','Fries',15) ON CONFLICT DO NOTHING;
INSERT INTO dish_order_item(dish_id,order_id,description,amount,status,dish_info_name,chef_id) VALUES (10006,10003,'No carrots!',1,'In Progress','Coattree',3) ON CONFLICT DO NOTHING;
INSERT INTO dish_order_item(dish_id,order_id,description,amount,status,dish_info_name,chef_id) VALUES (10007,10004,NULL,1,'In Progress','Marishrimp',8) ON CONFLICT DO NOTHING;
INSERT INTO dish_order_item(dish_id,order_id,description,amount,status,dish_info_name,chef_id) VALUES (10008,10004,NULL,1,'Ready','AppetizerB',2) ON CONFLICT DO NOTHING;
INSERT INTO dish_order_item(dish_id,order_id,description,amount,status,dish_info_name,chef_id) VALUES (10009,10005,NULL,3,'Ready','Tempura',3) ON CONFLICT DO NOTHING;
INSERT INTO dish_order_item(dish_id,order_id,description,amount,status,dish_info_name,chef_id) VALUES (10010,10001,NULL,2,'Complete','Tempura',12) ON CONFLICT DO NOTHING;
INSERT INTO dish_order_item(dish_id,order_id,description,amount,status,dish_info_name,chef_id) VALUES (10011,10001,NULL,2,'Complete','Coattree',15) ON CONFLICT DO NOTHING;


INSERT INTO menu_dish_info(menu_name,dish_info_name) VALUES ('Starters','Seasoned Fresh') ON CONFLICT DO NOTHING;
INSERT INTO menu_dish_info(menu_name,dish_info_name) VALUES ('Starters','Fries') ON CONFLICT DO NOTHING;
INSERT INTO menu_dish_info(menu_name,dish_info_name) VALUES ('Power Salads','Coattree') ON CONFLICT DO NOTHING;
INSERT INTO menu_dish_info(menu_name,dish_info_name) VALUES ('Brunch','Marishrimp') ON CONFLICT DO NOTHING;
INSERT INTO menu_dish_info(menu_name,dish_info_name) VALUES ('Brunch','AppetizerB') ON CONFLICT DO NOTHING;
INSERT INTO menu_dish_info(menu_name,dish_info_name) VALUES ('Brunch','Tempura') ON CONFLICT DO NOTHING;
INSERT INTO menu_dish_info(menu_name,dish_info_name) VALUES ('Happy Hour','Coca-cola') ON CONFLICT DO NOTHING;
INSERT INTO menu_dish_info(menu_name,dish_info_name) VALUES ('Happy Hour','Choca') ON CONFLICT DO NOTHING;
INSERT INTO menu_dish_info(menu_name,dish_info_name) VALUES ('Kids','Fries') ON CONFLICT DO NOTHING;
INSERT INTO menu_dish_info(menu_name,dish_info_name) VALUES ('Kids','Choca') ON CONFLICT DO NOTHING;
INSERT INTO menu_dish_info(menu_name,dish_info_name) VALUES ('Dessert','Oreo Jar') ON CONFLICT DO NOTHING;

# Michelin 3 star Restaurant Project

## Getting started
1. [Download PostresSQL](https://www.postgresql.org/download/) if you don't have it installed locally. If you have it installed locally, skip to step 3.
Note: If on Mac, you can also install PostgreSQL using Homebrew.
2. Open the installer and follow the instructions to install PostgresSQL locally. Make a note of your username and password. If you need to create a Database, name it `threestarrestaurant`. Here is an [example](https://www.postgresqltutorial.com/install-postgresql-macos/) for installing PostgresSQL on Mac.
3. Create a new Database for the application (if not created in Step 2):
* Open PSQL on your terminal by typing `psql -d postgres`
* Type `CREATE DATABASE threestarrestaurant;` then `exit;`. Note: DB name must be lowercase.
4. Navigate to the project backend root directory and run the following commands:  
* Open the PSQL terminal by typing `psql threestarrestaurant`
* Type `\i dbInit.sql` to run the dbInit.sql script. Once our applications tables are successfully created, `exit;`
5. While on the backend root directory, create a new `.env` file and add the following variable: `DATABASE_URL = "postgres://<your-psql-username>:'<your-psql-password>'@localhost:5432/<threestarrestaurant>"`
6. Test that your backend server and postgres was set up correctly by:
* Navigate to the backend directory and 1) Install node modules `yarn install` 2) start the backend server `yarn start`
* Send a request via your browser (or Postman) to `http://localhost:3001/testDBConnection`
* If everything went smoothly, you should see a list of restaurants currently in the restaurant table

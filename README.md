# NYSC


npx ts-node src/index.ts

Excellent — auth + post routes + middleware are all working exactly as intended.


Backend tools

* Node.js (npm)
* Containerization (Docker,Docker Compose)
* Cloud (Azure CLI)
* Orchestration & Automation (kubectl, Terraform, Git)


Backend Packages
* express
* cors
* dotenv
* mongoose
* jsonwebtoken
* bcryptjs
* nodemon (dev)



Connecting Postgres DB

to run inside shell    ---  sudo -u postgres psql
to create password     ---  ALTER USER postgres PASSWORD 'olawale';
to create the database ---  CREATE DATABASE nysc_db;
\q


Installing Postgressql on Linux


1. sudo apt update && sudo apt upgrade -y
2. sudo apt install postgresql postgresql-contrib -y

3. sudo systemctl start postgresql
4. sudo systemctl enable postgresql
5. sudo systemctl status postgresql
6. sudo -i -u postgres
7. psql ---- You should now see: postgres=#
8. Inside the `psql` shell, run:

```sql
CREATE USER myuser WITH PASSWORD 'mypassword';
ALTER ROLE myuser SET client_encoding TO 'utf8';
ALTER ROLE myuser SET default_transaction_isolation TO 'read committed';
ALTER ROLE myuser SET timezone TO 'UTC';
GRANT ALL PRIVILEGES ON DATABASE postgres TO myuser;
```

Exit `psql`:

```sql
\q
```

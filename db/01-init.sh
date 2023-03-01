#!/bin/bash
set -e
export PGPASSWORD=$POSTGRES_PASSWORD;
psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" <<-EOSQL
  CREATE USER $DB_USER WITH PASSWORD '$DB_PASSWORD';
  CREATE DATABASE $DB_NAME;
  \c $DB_NAME;
  CREATE TABLE IF NOT EXISTS quizzes (
	  id serial PRIMARY KEY,
	  title VARCHAR ( 250 ) NOT NULL,
	  description VARCHAR ( 250 ),
	  "isActive" BOOLEAN NOT NULL,
    questions jsonb[]  NOT NULL,
	  "createdAt" TIMESTAMP NOT NULL,
	  "updatedAt" TIMESTAMP NOT NULL,
    "deletedAt" TIMESTAMP 
  );
  GRANT ALL PRIVILEGES ON DATABASE $DB_NAME TO $DB_USER;
EOSQL
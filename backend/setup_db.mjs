import * as pg from 'pg';

let db_endpoint = "postgres://mkatareyunc:kmpproj123@comp-426-project.chgm6sw00gq9.us-east-1.rds.amazonaws.com:5432/finalprojdb"

const dbClient = new pg.Client(db_endpoint);

dbClient.connect();
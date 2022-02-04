require('dotenv').config();

const pg = require('pg');
//or native libpq bindings
//var pg = require('pg').native

const connectionString=process.env.ELEPHANT_SQL_CONNECTION_URL;

const client = new pg.Client(connectionString);
client.connect(function(err) {
  if(err) {
    return console.error('could not connect to postgres', err);
  }
  client.query('SELECT * FROM "public"."players"', function(err, result) {
    if(err) {
      return console.error('error running query', err);
    }
    console.log(result.rows);
    //kekw
    // >> output: 2018-08-23T14:02:57.117Z
    client.end();
  });
});

module.exports= client;
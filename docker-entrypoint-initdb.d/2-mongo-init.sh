mongoimport -u mongo -p mongo --db chatapp --collection message --file /docker-entrypoint-initdb.d/messages.json --jsonArray

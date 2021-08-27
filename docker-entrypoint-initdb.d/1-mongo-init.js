var user = {
  user: "mongo",
  pwd: "mongo",
  roles: [
    {
      role: "dbOwner",
      db: "chatapp",
    },
  ],
};

db.createUser(user);
db.createCollection("message");

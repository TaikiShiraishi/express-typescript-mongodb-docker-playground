var user = {
  user: "mongo",
  pwd: "mongo",
  roles: [
    {
      role: "readWrite",
      db: "chatapp",
    },
  ],
};

db.createUser(user);
db.createCollection("messages");

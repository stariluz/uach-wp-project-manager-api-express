const { initializeAdminIfNeeded } = require("./utilities/initializeDb");

module.exports = {
  run: () => {
    return new Promise((resolve, reject) => {
      // mongodb://<db_user>?:<db_password>?@<url>:<port>/<db_name>
      const mongodbUri = "mongodb+srv://a348775:YACACZL4bzIw8JbI@pmanager.t3bhabb.mongodb.net/?retryWrites=true&w=majority&appName=Pmanager";
      mongoose.connect(mongodbUri);
      const db = mongoose.connection;

      db.on('open', () => {
        console.log("Connection to database sucessful!");
        resolve(db);
      });

      db.on('error', (error) => {
        console.error("Couldn't connect to database");
        resolve(error);
      });
    });
  }
}
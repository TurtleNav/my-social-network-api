const { connect, connection } = require('mongoose');

// This try-catch block handles any MongoDB connection
// errors on startup
async function connectDB() {
  try {
    await connect('mongodb://127.0.0.1:27017/mysnDB');
  } catch(err) {
    console.error(`Mongoose failed to connect on startup and raised:\n${err}`);
  }
}
// Connect to DB
connectDB();

module.exports = connection;
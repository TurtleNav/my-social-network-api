const connection = require('../config/connection');
const {Thought, User} = require('../models');
const {getRandomUsers, getRandomThought} = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');
  // Delete the collections if they exist
  const userCheck = await connection.db.listCollections({ name: 'users' }).toArray();
  if (userCheck.length) {
    await connection.dropCollection('users');
    console.log("Deleted an existing users collection");
  }

  const thoughtCheck = await connection.db.listCollections({ name: 'thoughts' }).toArray();
  if (thoughtCheck.length) {
    await connection.dropCollection('thoughts');
  }
  // 20 users should be enough
  const users = getRandomUsers(20);

  // Add users to the collection and await the results
  const userData = await User.insertMany(users);

  const thoughts = [];
  users.forEach((user) => {
    thoughts.push({
      thoughtText: getRandomThought(),
      username: user.username,
    })
  })
  const thoughtData = await Thought.insertMany(thoughts);
  
  // output seed data
  console.table(users);
  console.table(thoughts);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});

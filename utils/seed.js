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
    console.log("Deleted an existing thought collection");
  }
  
  // 20 users should be enough
  const users = getRandomUsers(20);

  // Add users to the collection and await the results
  const userData = await User.insertMany(users);

  const thoughts = [];
  userData.forEach(async (user, index) => {
    thoughts.push({
      thoughtText: getRandomThought(),
      username: user.username,
    });

    // Give the user a friend who is nothing more than the next user in the array
    await User.findByIdAndUpdate(user._id, {friends: userData[(index+1)%20]})
  })
  const thoughtData = await Thought.insertMany(thoughts);
  
  // output seed data
  console.table(users);
  console.table(thoughts);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});

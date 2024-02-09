const connection = require('../config/connection');
const {Thought, User} = require('../models');
const {getRandomUsers, thoughts} = require('./data');

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

  const thoughts = await Thought.insertMany()
  

  /*
  await Thought.create({

  })

  // Add courses to the collection and await the results
  await Course.insertOne({
    courseName: 'UCLA',
    inPerson: false,
    students: [...studentData.map(({_id}) => _id)],
  });
*/
  // output seed data
  console.table(users);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});

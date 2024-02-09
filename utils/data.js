/*
  Seeds the social network

  Using a random selection of names, we can
*/
const names = [
  'Aaran',
  'Aaren',
  'Aarez',
  'Aarman',
  'Aaron',
  'Aaron-James',
  'Aarron',
  'Aaryan',
  'Aaryn',
  'Aayan',
  'Aazaan',
  'Abaan',
  'Abbas',
  'Abdallah',
  'Abdalroof',
  'Abdihakim',
  'Abdirahman',
  'Abdisalam',
  'Abdul',
  'Abdul-Aziz',
  'Abdulbasir',
  'Abdulkadir',
  'Abdulkarem',
  'Smith',
  'Jones',
  'Coollastname',
  'enter_name_here',
  'Ze',
  'Zechariah',
  'Zeek',
  'Zeeshan',
  'Zeid',
  'Zein',
  'Zen',
  'Zendel',
  'Zenith',
  'Zennon',
  'Zeph',
  'Zerah',
  'Zhen',
  'Zhi',
  'Zhong',
  'Zhuo',
  'Zi',
  'Zidane',
  'Zijie',
  'Zinedine',
  'Zion',
  'Zishan',
  'Ziya',
  'Ziyaan',
  'Zohaib',
  'Zohair',
  'Zoubaeir',
  'Zubair',
  'Zubayr',
  'Zuriel',
  'Xander',
  'Jared',
  'Courtney',
  'Gillian',
  'Clark',
  'Jared',
  'Grace',
  'Kelsey',
  'Tamar',
  'Alex',
  'Mark',
  'Tamar',
  'Farish',
  'Sarah',
  'Nathaniel',
  'Parker',
];

// Plant related thoughts. Yeah I like gardening
const thoughts = [
  "plants are cool",
  "I like plants",
  "i love plants",
  "my favorite tree has to be witch hazel",
  "Don't bother with buying succulents",
  "Overwatering plants can lead to root rot!",
  "Please don't plant Lilyturf in your garden",
  "You should only plant natives in your garden",
  "Nothing tastes better than wild raspberries in the dead of summer",
  "Monkshood is one of the most poisonous plants known",
  "Planting Common Milkweed can attract Monarch Butterflies to your yard",
  "Squirrels keep taking my tomatoes...",
  "Try not to use insecticides in your garden!",
  "I have praying mantises all over my garden and I think they like me",
  "Monstera's are hands-down the most beautiful house plant one can own",
  "You have to be the Grim Reaper to kill a Snake Plant",
  "plants are wonderful",
  "You can reduce your waste significantly and make great soil from composting",
  "They say being amongst plants puts us in a better mood",
  "I never miss a growing season"
]

// Get a random item given an array
const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

// make a email from a name in the format name@email.com
const getEmail = (name) => `${name}@email.com`;

const getRandomName = () => names[Math.floor(Math.random() * names.length)];
const getRandomThought = () => getRandomArrItem(thoughts);

const getRandomUsers = (n) => {
  let randNames = new Set();
  do {
    // grab a user and drop them in the set
    randNames.add(getRandomName());
  } while (randNames.size < n);

  /*
  randNames = Array.from(randNames);
  getRandomFriends = (name) => {
    const friends = [];
    for (const friendName of randNames) {
      // ensure someone isn't friends with themselves
      if (name === friendName) {
        continue;
      }
      // Do a coin toss on whether we add this friend
      if (Math.random() < 0.5) {
        friends.push(friendName);
      }
    }
    return friends;
  }
  */

  const users = [];
  randNames.forEach((name) => {
    users.push({
      username: name,
      email: getEmail(name),
    })
  })

  // Now we have a guaranteed unique collection of user that is exactly n entries
  return users;
}


// Export the functions for use in seed.js
module.exports = { getRandomUsers, thoughts };

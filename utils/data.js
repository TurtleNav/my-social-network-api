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

// Get a random item given an array
const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

// make a email from a name in the format name@email.com
const getEmail = (name) => `${name}@email.com`;

const getRandomUsers = (n) => {
  let users = [];
  const maxUsers = Math.min(n, names.length);
  for (let i=0; i<maxUsers; i++) {
    // pop out a random name then push it to our users
    users.push({name: names.splice(getRandomArrItem(names), 1)});
  }

  for (const user of users) {
    userFriends = new Set();
    while (userFriends.size < 3) {
      userFriends.add(users[getRandomArrItem()].name);
    }
    user.friends = Array.from(userFriends);
    user.email = getEmail(user.name);
  }

  return users;
}

// Export the functions for use in seed.js
module.exports = { getRandomUsers };

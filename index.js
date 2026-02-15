const mongoose = require('mongoose');

//mongoose.connect('mongodb://127.0.0.1:27017/test');

main()
.then(()=>{
    console.log('Connected to MongoDB');
})
.catch((err)=>{    
    console.error('Error connecting to MongoDB', err);   })

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

const userSchema = new mongoose.Schema({
    name: String,
    
    email: String,
    age: Number,
});

const User = mongoose.model('User', userSchema);

const user1 = new User({
    name: 'Alice',
    email: 'alice@example.com',
    age: 30
});
user1.save();

const user2 = new User({
    name: 'Bob',
    email: 'bob@example.com',
    age: 25
});
user2.save();

const user3 = new User({
    name: 'Charlie',
    email: 'charlie@example.com',
    age: 35
});
user3.save();

const user4 = new User({
    name: 'Diana',
    email: 'diana@example.com',
    age: 28
});
user4.save();

const user5 = new User({
    name: 'Eve',
    email: 'eve@example.com',
    age: 32
});
user5.save();

const user6 = new User({
    name: 'Frank',
    email: 'frank@example.com',
    age: 27
});
user6.save();

const user7 = new User({
    name: 'Grace',
    email: 'grace@example.com',
    age: 31
});
user7.save();

const user8 = new User({
    name: 'Henry',
    email: 'henry@example.com',
    age: 29
});
user8.save();

const user9 = new User({
    name: 'Iris',
    email: 'iris@example.com',
    age: 26
});
user9.save();

const user10 = new User({
    name: 'Jack',
    email: 'jack@example.com',
    age: 33
});
user10.save();

const user11 = new User({
    name: 'Kate',
    email: 'kate@example.com',
    age: 24
});
user11.save();



module.exports = {
    User,
};
User.find().then((users)=>{
    console.log(users);
})
.catch((err)=>{
    console.error('Error fetching users', err);
});

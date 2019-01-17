const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {ObjectID} = require('mongodb');

const id = '6c3fa7416f9a420f50a8f86411';

console.log(ObjectID.isValid(id));

Todo.findById(id).then((todo) => {
    console.log('Todo', todo);
})
.catch((e) => console.log(e));
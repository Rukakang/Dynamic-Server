const fs =require('fs');

const string = fs.readFileSync('./db/users.json').toString();
const usersArray = JSON.parse(string);//转化成数组
console.log(usersArray);

const user3 = { "id":3,"name":"kkk","password":"fff"};
usersArray.push(user3);

const userstring = JSON.stringify(usersArray);
console.log(usersArray);
fs.writeFileSync('./db/users.json',userstring);

const users = [
    { name: "An", age: 25 },
    { name: "Bình", age: 17 },
    { name: "Chi", age: 30 },
    { name: "Dũng", age: 20 }
];


const filteredUsers = users.filter(user => user.age >= 18);


const sortedUsers = filteredUsers.sort((a, b) => a.age - b.age);


const names = sortedUsers.map(user => user.name);

console.log("Danh sách người dùng đủ 18 tuổi, sắp xếp theo tuổi tăng dần:");
console.log(names);

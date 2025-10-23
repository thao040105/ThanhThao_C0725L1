
const numbers = [3, 5, 7];

const moreNumbers = [1, 2, ...numbers, 8, 9];
console.log("Mảng moreNumbers:", moreNumbers);


const [first, second, ...others] = moreNumbers;
console.log("Phần tử đầu tiên:", first);
console.log("Phần tử thứ hai:", second);
console.log("Các phần tử còn lại:", others);


function sum(...args) {
    return args.reduce((total, num) => total + num, 0);
}


const total = sum(...moreNumbers);
console.log("Tổng các phần tử trong moreNumbers là:", total);

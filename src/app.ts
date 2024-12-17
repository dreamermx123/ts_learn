const multiply = (a: number, b: number): number => {
    return a * b
}

console.log(multiply(5, 6))

type User = {
    name: string,
    age: number,
    isAdmin?: boolean,
}

function getUserInfo(user: User): string {
    const role = user.isAdmin ? "Admin" : "User";
    return `${user.name}, Age: ${user.age}, Role:${role}`
}

const user: User = { name: "Alice", age: 10, isAdmin: true }
console.log(getUserInfo(user))

interface UserInt {
    name: string,
    email: string,
    age: number,
}

function createUser(user: UserInt): void {
    console.log(`User ${user.name} (${user.email}) is ${user.age} years old.`);
}

const newUser: UserInt = {
    name: "Bob",
    email: "bob@example.com",
    age: 30,
};

createUser(newUser)

//Типизация массивов и кортежей
const numbers: number[] = [1, 2, 3, 4]
const strings: string[] = ["a", "b", "c"];

// Функция для обработки массива чисел
function incrementNumbers(arr: number[]): number[] {
    return arr.map((num) => num + 1);
}
console.log(incrementNumbers(numbers)); // [2, 3, 4, 5]
//Кортежи
type Product = [string, number, boolean];

const product: Product = ["Laptop", 1500, true];

function getProductInfo(product: Product): string {
    const [name, price, isAvailable] = product;
    return `${name} costs $${price}. Available: ${isAvailable ? "Yes" : "No"}`;
}

console.log(getProductInfo(product)); // "L


interface ApiUser {
    id: number;
    name: string;
    email: string;
}

function formatUsers(users: ApiUser[]): string[] {
    return users.map(
        (user) => `User ${user.name} (ID: ${user.id}) has email ${user.email}`
    );
}

const users: ApiUser[] = [
    { id: 1, name: "Alice", email: "alice@example.com" },
    { id: 2, name: "Bob", email: "bob@example.com" },
];

console.log(formatUsers(users));
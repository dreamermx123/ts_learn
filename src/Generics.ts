function identityString(value: string): string {
    return value;
}

function identityNumber(value: number): number {
    return value;
}

function identity<T>(value: T): T {
    return value;
}

console.log(identity<string>("Hello")); // "Hello"
console.log(identity<number>(42)); // 42


function getFirstElement<T>(arr: T[]): T | undefined {
    return arr[0];
}

console.log(getFirstElement([1, 2, 3])); // 1 (T = number)
console.log(getFirstElement(["a", "b", "c"])); // "a" (T = string)
console.log(getFirstElement([]));

class Box<T> {
    private content: T;

    constructor(value: T) {
        this.content = value;
    }

    getContent(): T {
        return this.content;
    }

    setContent(value: T): void {
        this.content = value;
    }
}

const stringBox = new Box<string>("Hello");
console.log(stringBox.getContent()); // "Hello"

const numberBox = new Box<number>(42);
console.log(numberBox.getContent()); // 42

interface Pair<T, U> {
    first: T;
    second: U;
}

const stringNumberPair: Pair<string, number> = {
    first: "Alice",
    second: 42,
};

console.log(stringNumberPair); // { first: "Alice", second: 42 }
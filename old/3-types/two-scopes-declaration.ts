// virtual - real

interface UserAccount {
    name: string;
    age: number;
}

// let person1: UserAccount = UserAccount;

let userAccount = {
    name: 'Zoya',
    age: 34,
}

let person2: typeof userAccount = {
    name: 'Sam',
    age: 30
};

class Point {
    public x = 10
}

let o: Point = new Point();
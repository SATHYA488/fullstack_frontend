class Student {
    constructor(name, age, mark) {
        this.name = name;
        this.age = age;
        this.mark = mark;
    }
    displayDetails() {
        console.log(`Name: ${this.name}, Age: ${this.age}, Mark: ${this.mark}`);
    }
}

const s1 = new Student("Ravi", 22, 85);
const s2 = new Student("Kumar", 23, 90);

s1.displayDetails();
s2.displayDetails();

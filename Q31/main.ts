let users: { name: string, age: number }[] = []; // Empty array initially

// Check if the list of users is not empty
if (users.length > 0) {
    for (let user of users) {
        let age = user.age;

        if (age < 2) {
            console.log(`${user.name} is a baby.`);
        } else if (age >= 2 && age < 4) {
            console.log(`${user.name} is a toddler.`);
        } else if (age >= 4 && age < 13) {
            console.log(`${user.name} is a kid.`);
        } else if (age >= 13 && age < 20) {
            console.log(`${user.name} is a teenager.`);
        } else if (age >= 20 && age < 65) {
            console.log(`${user.name} is an adult.`);
        } else {
            console.log(`${user.name} is an elder.`);
        }
    }
} else {
    console.log("We need to find some users!");
}

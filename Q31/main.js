var users = []; // Empty array initially
// Check if the list of users is not empty
if (users.length > 0) {
    for (var _i = 0, users_1 = users; _i < users_1.length; _i++) {
        var user = users_1[_i];
        var age = user.age;
        if (age < 2) {
            console.log("".concat(user.name, " is a baby."));
        }
        else if (age >= 2 && age < 4) {
            console.log("".concat(user.name, " is a toddler."));
        }
        else if (age >= 4 && age < 13) {
            console.log("".concat(user.name, " is a kid."));
        }
        else if (age >= 13 && age < 20) {
            console.log("".concat(user.name, " is a teenager."));
        }
        else if (age >= 20 && age < 65) {
            console.log("".concat(user.name, " is an adult."));
        }
        else {
            console.log("".concat(user.name, " is an elder."));
        }
    }
}
else {
    console.log("We need to find some users!");
}

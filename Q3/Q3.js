var my_name = "suhaib"; //snakecase used
console.log("Uppercase:");
console.log(my_name.toUpperCase());
console.log("Lowercase:");
console.log(my_name.toLowerCase());
console.log("Titlecase:");
console.log(my_name.replace(/\b\w/g, function (c) { return c.toUpperCase(); }));

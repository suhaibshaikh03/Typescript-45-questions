//Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.
var famous_person = "Rudyard Kipling";
var quote = "He travels the fastest who travels alone.";
var message = "".concat(famous_person, " once said,\"").concat(quote, "\""); //used backticks because wanted to used double quotes inside
console.log(message);

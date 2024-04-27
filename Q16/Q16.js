var guests = ["Albert Einstein", "Marie Curie", "Leonardo da Vinci"];
console.log("Great news! I found a bigger dinner table!");
// Adding more guests
guests.unshift("Ali");
guests.splice(guests.length / 2, 0, "hameed");
guests.push("hareem");
guests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", would you like to join me for dinner?"));
});

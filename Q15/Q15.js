// Q14 Answer:
var guests = ["Albert Einstein", "Marie Curie", "Nikola Tesla"];
guests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", would you like to join me for dinner?"));
});
// Q15 Answer:
var unableToAttend = "Ali";
console.log("".concat(unableToAttend, " can't make it to dinner."));
// Replace the guest
var newGuest = "Suhaib";
guests[guests.indexOf(unableToAttend)] = newGuest;
// New invitations
guests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", would you like to join me for dinner?"));
});

// Q14 Answer:
let guests: string[] = ["Albert Einstein", "Marie Curie", "Nikola Tesla"];

guests.forEach(guest => {
    console.log(`Dear ${guest}, would you like to join me for dinner?`);
});


// Q15 Answer:
let unableToAttend = "Ali";
console.log(`${unableToAttend} can't make it to dinner.`);

// Replace the guest
let newGuest = "Suhaib";
guests[guests.indexOf(unableToAttend)] = newGuest;

// New invitations
guests.forEach(guest => {
    console.log(`Dear ${guest}, would you like to join me for dinner?`);
});
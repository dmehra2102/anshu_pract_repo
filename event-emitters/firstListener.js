const TicketManager = require("./ticketManager.js");

const ticketManager = new TicketManager(10);

ticketManager.on("buy",()=>{
    console.log("Someone bought a ticket.");
})

ticketManager.buy('deepanshu@gmail.com',230);

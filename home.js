//🔐 Part 1: Login & Access Control


let username = prompt(" 🔐 Enter your username:");
let password = prompt(" 🔐 Enter your password:");

if ((username === "admin" || username === "user") && password === "1234") {
  role = username;
  securityLevel = username === "admin" ? "high" : "low";
} else {
  alert(" 🚫 Invalid credentials! Access denied.");
  throw new Error("Program stopped due to authentication failure.");
}

  let customerName = prompt("What's your name?");
  let age = parseInt(prompt("How old are you?"));
  let coffeeType = prompt("What type of coffee would you like? (espresso, latte, cappuccino)").toLowerCase();
  let quantity = parseInt(prompt("How many cups would you like?"));

  let pricePerCup;
  if (coffeeType === "espresso") {
    pricePerCup = 2.5;
  } else if (coffeeType === "latte") {
    pricePerCup = 3.5;
  } else if (coffeeType === "cappuccino") {
    pricePerCup = 4.0;
  } else {
    alert("Invalid coffee type!");
    throw new Error("Unknown coffee type. Program stopped.");
  }

  let originalTotal = pricePerCup * quantity;

  let discount = 0;
  if (age < 18 || age > 60 ) {
    discount = originalTotal * 0.10;
  }

  let finalTotal = originalTotal - discount;

  alert(
    "Hello " + customerName + "!\n" +
    "You ordered " + quantity + " " + coffeeType + "(s).\n" +
    "Original total: $" + originalTotal.toFixed(2) + "\n" +
    "Discount: $" + discount.toFixed(2) + "\n" +
    "Final total: $" + finalTotal.toFixed(2)
  );


  let splitCount = parseInt(prompt("How many people are splitting the bill? (1, 2, or 3)"));
  if (![1, 2, 3].includes(splitCount)) {
    alert("Invalid number of people! Please enter 1, 2, or 3.");
    throw new Error("Invalid split count. Program stopped.");
  }

  let tipPercent = parseInt(prompt("Enter tip percentage (0, 5, 10, or 15):"));
  if (![0, 5, 10, 15].includes(tipPercent)) {
    alert("Invalid tip percentage!");
    throw new Error("Invalid tip percentage. Program stopped.");
  }

  let tipAmount = finalTotal * (tipPercent / 100);
  let totalWithTip = finalTotal + tipAmount;
  let amountPerPerson = totalWithTip / splitCount;

  alert(
    "Tip: $" + tipAmount.toFixed(2) + "\n" +
    "Total with Tip: $" + totalWithTip.toFixed(2) + "\n" +
    "Split between " + splitCount + " person(s): $" + amountPerPerson.toFixed(2) + " each"
  );









//     document.getElementById("coffeeForm").addEventListener("submit", function(event) {
//       event.preventDefault();

//       const name = document.getElementById("name").value;
//       const age = parseInt(document.getElementById("age").value);
//       const coffeeType = document.getElementById("coffeeType").value;
//       const quantity = parseInt(document.getElementById("quantity").value);
//       const people = parseInt(document.getElementById("people").value);
//       const tipPercentage = parseInt(document.getElementById("tip").value);

      
//       let pricePerCup = {
//         espresso: 2.5,
//         latte: 3.5,
//         cappuccino: 4.0
//       }[coffeeType] || 0;

//       let originalTotal = pricePerCup * quantity;
//       let discount = (age < 18 || age > 60) ? originalTotal * 0.1 : 0;
//       let finalTotal = originalTotal - discount;
//       let tipAmount = finalTotal * (tipPercentage / 100);
//       let totalWithTip = finalTotal + tipAmount;
//       let splitAmount = totalWithTip / people;

//       document.getElementById("outputArea").innerHTML = `
//         <strong>Hello ${name}!</strong><br>
//         You ordered ${quantity} ${coffeeType}(s).<br>

// Original Total: $${originalTotal.toFixed(2)}<br>
//         Discount: $${discount.toFixed(2)}<br>
//         Tip: $${tipAmount.toFixed(2)}<br>
//         <strong>Total with Tip: $${totalWithTip.toFixed(2)}</strong><br>
//         <strong>Split between ${people}: $${splitAmount.toFixed(2)} each</strong>
//       `;
//     });
   
 
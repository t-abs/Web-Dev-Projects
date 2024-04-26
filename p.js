function getResponse() {
  var budgetRange = document.getElementById("budgetRange").value;
  var favoritePlace = document.getElementById("favoritePlace").value;
  
  // Send user input to server (here, simulate server response)
  var botResponse = getBotResponse(favoritePlace, budgetRange);
  
  // Display bot response in chat box
  var chatbox = document.getElementById("chatbox");
  var chatItem = document.createElement("p");
  chatItem.textContent = "Bot: " + botResponse;
  chatbox.appendChild(chatItem);
}

function getBotResponse(userInput, budgetRange) {
    if (userInput === "Goa") {
        if (budgetRange === "low") {
            return "Great choice! Here are some options in Goa suitable for a low budget:\nRestaurants:\n1. Cafe Sussegado Souza\n2. Souza Lobo\n3. Infantaria\n4. Curlies Beach Shack\n5. Britto's\n\nEntertainment:\n1. Anjuna Flea Market\n2. Calangute Beach\n3. Dudhsagar Falls Trek\n4. Fort Aguada\n5. Chapora Fort";
        } else if (budgetRange === "medium") {
            return "Great choice! Here are some options in Goa suitable for a medium budget:\nRestaurants:\n1. Fisherman's Wharf\n2. Gunpowder\n3. Thalassa\n4. Vinayak Family Restaurant\n5. Anand Seafood Restaurant\n\nEntertainment:\n1. Water Sports at Baga Beach\n2. Spice Plantation Tour\n3. Casino at Panjim\n4. Sunset Cruise on Mandovi River\n5. Butterfly Conservatory";
        } else if (budgetRange === "high") {
            return "Great choice! Here are some options in Goa suitable for a high budget:\nRestaurants:\n1. The Black Sheep Bistro\n2. Mum's Kitchen\n3. Martin's Corner\n4. Bomra's\n5. Matsya Freestyle Kitchen\n\nEntertainment:\n1. Scuba Diving in Grande Island\n2. Hot Air Balloon Ride\n3. Private Yacht Charter\n4. Helicopter Tour\n5. Nightlife at Tito's Club";
        } else {
            return "I'm sorry, I don't understand. Please specify your budget range as 'low', 'medium', or 'high'.";
        }
    } else if (userInput === "exit") {
        return "Goodbye!";
    } else {
        return "I'm sorry, I don't understand. Please try again.";
    }
}

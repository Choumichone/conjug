const messagesDiv = document.getElementById("messages");
const userInput = document.getElementById("userInput");

const verbes = ["être", "avoir", "faire", "aller", "venir", "prendre", "voir", "dire", "pouvoir", "vouloir"];

// Afficher un message dans la fenêtre de chat
function addMessage(text) {
    const message = document.createElement("div");
    message.textContent = text;
    messagesDiv.appendChild(message);
    messagesDiv.scrollTop = messagesDiv.scrollHeight; // Faire défiler automatiquement vers le bas
}

// Poser une question sur un verbe au hasard
function askQuestion() {
    const verb = verbes[Math.floor(Math.random() * verbes.length)];
    addMessage(`Conjugue le verbe "${verb}" à l'indicatif présent.`);
}

// Gérer la réponse de l'utilisateur
userInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        const answer = userInput.value.trim();
        if (answer) {
            addMessage("Tu as répondu : " + answer);
            userInput.value = ""; // Vide l'input
            askQuestion(); // Pose une nouvelle question
        }
    }
});

// Message de bienvenue et première question
addMessage("Bienvenue dans le quiz de conjugaison !");
askQuestion();

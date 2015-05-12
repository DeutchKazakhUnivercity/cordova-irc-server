// JavaScript source code
var messages = [];

function addMessagesWithLimit(message, limit) {
    messages.push(message);
    while (messages.length > limit) {
        messages.shift();
    }
}

for (var i = 0; i < 20; i++) {
    var testMessage = {
        login: "Login" + i,
        message: "Message" + i
    };
    addMessagesWithLimit(testMessage, 10);
}

console.log(messages);
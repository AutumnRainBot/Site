const socket = new WebSocket('wss://rainbot.xyz'); // Update WebSocket URL here

socket.onmessage = function(event) {
    const messageList = document.getElementById('message-list');
    const messageItem = document.createElement('div');
    messageItem.textContent = event.data;
    messageList.appendChild(messageItem);
    messageList.scrollTop = messageList.scrollHeight;
};

function sendMessage() {
    const messageInput = document.getElementById('message-input');
    const message = messageInput.value;
    socket.send(message);
    messageInput.value = '';
}

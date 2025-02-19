document.getElementById('messageForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('nameInput').value;
    const message = document.getElementById('messageInput').value;
    const messageList = document.getElementById('messagesList');

    // Создаём новый элемент сообщения
    const newMessage = document.createElement('li');
    newMessage.innerHTML = `<strong>${name ? name : 'Аноним'}:</strong> ${message}`;
    messageList.appendChild(newMessage);

    // Очищаем форму
    document.getElementById('messageInput').value = '';
    document.getElementById('nameInput').value = '';
});

const username = prompt('please input your name')
const chatMessages = document.getElementById('chat-messages');
const sendButton = document.getElementById('send-button');
const messageInput = document.getElementById('message-input');
const errorMessage = document.getElementById('error-message')

const sendMessage = () => {

  const message = messageInput.value.trim();

    if (!message) {
      errorMessage.innerHTML = 'input cannot be blank'
      errorMessage.style.display = 'block'

      setTimeout(() => {
        errorMessage.style.display = 'none'
      }, 1000);
      return
    } else {
      errorMessage.style.display = 'none'
    }

    const usernameEl = document.createElement('div');

    chatMessages.appendChild(usernameEl)
    usernameEl.classList.add('username');


      const today = new Date()
    
    const day = `${today.getDate() < 10 ? "0" + today.getDate() : today.getDate()}`
    const month = `${(today.getMonth() + 1) < 10 ? "0" + (today.getMonth() + 1) : (today.getMonth() + 1)}`
    const year = `${today.getFullYear()}`
    const hour = `${today.getHours() < 10 ? "0" + today.getHours() : today.getHours()}`
    const minute = `${today.getMinutes() < 10 ? "0" + today.getMinutes() : today.getMinutes()}`
    const second = `${today.getSeconds() < 10 ? "0" + today.getSeconds() : today.getSeconds()}`

    usernameEl.textContent = `${username} - ${day}/${month}/${year} - ${hour}:${minute}:${second}`
    
  const messageEl = document.createElement('div');
  
  messageEl.classList.add('chat-message');
  messageEl.textContent = message;
  chatMessages.appendChild(messageEl);
  messageInput.value = '';
  chatMessages.scrollTop = chatMessages.scrollHeight;
};


sendButton.addEventListener('click', sendMessage);

messageInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
    sendMessage();
  }
});
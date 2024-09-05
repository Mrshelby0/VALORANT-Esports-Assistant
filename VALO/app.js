document.getElementById('send-btn').addEventListener('click', async function() {
    const userInput = document.getElementById('user-input').value;
    if (userInput.trim() === '') {
        return;
    }
    
    // Display user message
    const chatLog = document.getElementById('chat-log');
    chatLog.innerHTML += `<div class="p-2 mb-2 bg-gray-700 rounded-md">You: ${userInput}</div>`;
    document.getElementById('user-input').value = ''; 

    // Call backend (replace URL with your backend API endpoint)
    try {
        const response = await fetch('http://localhost:3000/query', { // Change URL as needed
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ prompt: userInput })
        });
        const data = await response.json();
        
        // Display assistant response
        chatLog.innerHTML += `<div class="p-2 mb-2 bg-gray-700 rounded-md">Assistant: ${data.response}</div>`;
        chatLog.scrollTop = chatLog.scrollHeight; // Scroll to the bottom
    } catch (error) {
        console.error('Error fetching response:', error);
    }
});

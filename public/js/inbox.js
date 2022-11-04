function render(id) {

    let html = '<h1 id="chats">Chats</h1>';

    for (let i = 0; i < chatUsers.length; i++) {

        const user = chatUsers[i];
        let smallMsg = '';

        for(let y = 0; y < 10; y++){
        smallMsg += user.message[y];
        }

        html += `
        <div id="user" onclick="window.location = 'messages.html'">
            <img src="img/${user.title}.jpg" alt="${user.name}" id="user-pic">
            <p id="user-name">${user.name}</p><br>
            <p id="message">${smallMsg}...</p>
        </div>    
    `;
    }

    document.getElementById(id).innerHTML = html;
}
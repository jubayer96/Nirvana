function chatMsg() {
    let x = document.getElementById('msg').value;
    document.getElementById('msg-sender').innerHTML = x;

    if(x != ""){

    document.getElementById('msg').value = "";

    var div = document.getElementById('sender-div'),
        clone = div.cloneNode(true);
        clone.style.display = "block";

    document.body.appendChild(clone);
    }
}
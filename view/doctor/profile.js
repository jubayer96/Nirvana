const render = require('../../modules/render/doctor-layout.js');

module.exports = function (user) {
    let content = `
    <div id="profile-container">
            <div id="profile-image">
                <img id="proimg" src="/img/user1.jpg" alt="Image preview...">
                <br><br>
                <input id="imguploader" type="file" onchange="readURL(this)">
            </div>
    
            <div id="profile-info">
                <div class="form-style-5">
                    <form method="POST" action="/editProfile">
                        <fieldset>
                            <legend class="infotitle">${user.type} Info</legend>
                            Name: <input id="name" type="text" value="${user.name}" name="username" readonly>
                            Date of Birth: <input id="dob" type="date" value="${user.dob}" readonly>
                            Address: <input type="text" id="address" value="${user.address}" readonly>
                            Phone no: <input type="number" id="phone" value="${user.phoneNo}" readonly>
    
                        </fieldset>
                        <fieldset>
                            <legend class="infotitle">Account Info</legend>
                            email: <input id="email" type="email" value="${user.email}" readonly>
                            password: <input id="pass" type="password" value="${user.password}" readonly>
                        </fieldset>
                        <button id="editinfo" onclick="turnEditOn(this)">Edit</button>
                    </form>
                </div>
    
            </div>
        </div>`;
    
        return render(content); 
}
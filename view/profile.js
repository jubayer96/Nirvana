const render = require('../modules/render/doctor-layout');

module.exports = function () {
    return render({
        displayContent: `
        <div id="profile-container">
            <div id="profile-image">
                <img id="proimg" src="img/user1.jpg" alt="Image preview...">
                <br><br>
                <input id="imguploader" type="file" onchange="readURL(this)">
            </div>
    
            <div id="profile-info">
                <div class="form-style-5">
                    <form method="POST" action="/userprofile">
                        <fieldset>
                            <legend class="infotitle"> Info</legend>
                            Name: <input id="name" type="text" value="" name="username" readonly>
                            Date of Birth: <input id="dob" type="date" value="" readonly>
                            Address: <input type="text" id="address" value="" readonly>
                            Phone no: <input type="number" id="phone" value="" readonly>
    
                        </fieldset>
                        <fieldset>
                            <legend class="infotitle">Account Info</legend>
                            email: <input id="email" type="email" value="" readonly>
                            password: <input id="pass" type="password" value="" readonly>
                        </fieldset>
                        <button id="editinfo" onclick="turnEditOn(this)">Edit</button>
                    </form>
                </div>
    
            </div>
        </div>`
    });
}
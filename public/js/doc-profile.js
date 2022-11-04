function userProfile(){
    return `
    <!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="css/profile.css">
  <script src="js/userlist.js"></script>
  <script src="js/profile.js"></script>  
  <script>
      let currentPatient = patientList[0];
   </script>
  
</head>

<body>

  <div id="profile-container">
    <div id="profile-image">
      <img id="proimg" src="img/user1.jpg" alt="Image preview...">
      <br><br>
      <input id="imguploader" type="file"  onchange="readURL(this)">
    </div>

    <div id="profile-info">
      <div class="form-style-5">
        <fieldset>
          <legend class="infotitle">Personal Info</legend>
          Name: <input id="name" type="text" value="" readonly>
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
      </div>
      <script>
        patientInfo( currentPatient);
      </script>

    </div>

</body>

</html>
    `;
}
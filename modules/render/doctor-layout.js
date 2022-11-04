module.exports = function (displayContent) {
  return ` 
    <!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="/css/doctor-style.css">
  <link rel="stylesheet" href="/css/profile.css">
  <link rel="stylesheet" href="/css/doctor-requestlist.css">
  <link rel="stylesheet" href="/css/doctor-schedule.css">
  <script src="/js/profile.js"></script>
  <script src="/js/doctor-requestlist.js"></script>
  <script src="/js/doctor-schedulelist.js"></script>
  <script src="/js/doctor-render-schedulelist.js"></script>
  <title>Nirvana</title>
</head>

<body>
  <div id="container">

    <!-- !Header Content (Copy to all pages) -->

    <div class="header">

      <div id="logoContainer">
        <a href="/index.html">
          <img src="/img/main-logo.png" class="logo">
        </a>
      </div>

      <div id="header-btns">
        <a id="home" href="#">Home</a>
        <a id="test" href="#">Tests</a>
        <a id="sign-in" href="/logout">Sign Out</a>
      </div>
    </div>

    <!-- User dashboard -->

    <div id="user-panel">
      <div class="dashboard">Dashboard</div>
      <div id="profile" class="item item1"><a href='/doctor/profile'>Profile</a></div>
      <div id="doctor-schedule" class="item item2"><a href='/doctor/schedule'>Schedule</a></div>
      <div id="doctor-requestlist" class="item item3"><a href='/doctor/requestList'>Patients List</a></div>
      <div id="inbox" class="item item5"><a href='#'>Inbox</a></div>
      <div class="empty"></div>
      <div id="dashdisplay" class="dashboard-display" width="100%" height="50%">${displayContent}</div>
    </div>

    <!-- footer -->

    <div class="footer">
      <div id="grid-footer">

        <img id="whiteLogo" src="/img/white-logo.png">

        <div id="hyperlinks">
          <p id="quick"> QUICK LINKS </p>
          <div id="links-container">
            <p><a href="#" class="white">HOME</a></p>
            <p><a href="#" class="white">CONTACT US</a></p>
            <p><a href="#" class="white">FAQ</a></p>
          </div>
        </div>

        <div id="follow-us">
          <p id="follow-text">FOLLOW US</p>
          <a href="#"><img src="/img/facebook.webp" class="size-photo"></a>
          <a href="#"><img src="/img/instagram.png" class="size-photo"></a>
          <a href="#"><img src="/img/whatsapp.png" class="size-photo"></a>
        </div>
      </div>

      <p id="rights">ALL RIGHTS RESERVED FOR NIRVANA TEAM 2019 © </p>
    </div>

  </div>
</body>

</html>
   `;
}
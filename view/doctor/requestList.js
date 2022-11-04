const render = require('../../modules/render/doctor-layout');

module.exports = function () {
  let content = `
  <div id="cp">
      <h1>Current Patients</h1>
    </div>

    <hr>
    <div id="cpl">
      <table id="currentpatientslists">
      </table>
    </div>
    <div id="rp">
      <h1>Requested Patients</h1>
    </div>
    <hr>    
    <div id="note" >Currently no patients</div>
    <div id="rpl">
        
      <table id="requestedpatientslists">
      </table>
    </div>`;

    return render(content);
}
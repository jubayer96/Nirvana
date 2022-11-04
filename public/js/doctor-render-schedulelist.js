function showSchedule() {


    let html = `<div class="dt">
                    <input type="date" id="date" value="${element3.date}" readonly>
                    <input type="text" id="day" value="Sunday" readonly>
                    <hr>
                </div>
                <div class="patients">
                    <table id="pt1">
                        <tr>
                            <th>Name</th>
                            <th>Time</th>
                        </tr>`;

    html += patients.reduce(

        (append, element3) =>
            append +
            `<tr>
               <td>Dipjol</td>
               <td>12:00 p.m</td>
             </tr>
           </table>
         </div>
      `,
        ''
    );

    document.getElementById('currentpatientslists').innerHTML = html;
}
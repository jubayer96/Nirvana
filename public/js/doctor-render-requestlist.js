function showCurrentPatientList() {

    let html = '<tr><th>Name</th></tr>';

     html += currentPatients.reduce(

        (append, element1) =>
            append +
            `
        <tr>
        <td width="30%">${element1.name}</td>
        <td width="30%" class="right"><button>Profile</button></td>
        <td width="30%" class="left"><button>Report</button></td>
         </tr>
       `,
        ''
    );

    document.getElementById('currentpatientslists').innerHTML = html;

}
function showRequestedPatientList() {

    let html = '<tr><th>Name</th></tr>';

     html += requestedPatients.reduce(

        (append, element2) =>
            append +
            `
        <tr>
        <td width="30%">${element2.name}</td>
        <td width="30%" class="right"><button value="${element2.title}" onclick="accept(this)" >Accept</button></td>
        <td width="30%" class="left"><button value="${element2.title}" onclick="reject(this)">Reject</button></td>
         </tr>
       `,
        ''
    );

    document.getElementById('requestedpatientslists').innerHTML = html;

}


function accept(button){
    
    // const attributes = ['title', 'name'];
    // attributes.forEach(
    //     (attr) => currentPatients[attr] = requestedPatients[attr]
    // );

     let reqTitle = button.value;

    //  let i;

    //  i = requestedPatients.name.indexOf('user5');

    //  alert(i);


    for(let x = 0; x < requestedPatients.length; x++){
        
        let reqName = requestedPatients[x].name;

        if(reqTitle == requestedPatients[x].title){
            currentPatients.push(currentPatient(reqTitle, reqName))
            requestedPatients.splice(x, 1);
        }

        if(requestedPatients.length == 0){
            document.getElementById('rpl').style.display = 'none';
            
            document.getElementById('note').style.display = 'block';
        }
    }
    showCurrentPatientList();
    showRequestedPatientList();

    // requestedPatients[]
    //var x = document.getElementById('user4').value;
    // currentPatients.push(currentPatient('user4', 'ZahidVog'));
    // alert(currentPatients[3].name);
}

function reject(button){
    let reqTitle = button.value;
    for(let x = 0; x < requestedPatients.length; x++){
        if(reqTitle == requestedPatients[x].title){
            
            requestedPatients.splice(x, 1);
        }
    } 

    if(requestedPatients.length == 0){
        document.getElementById('rpl').style.display = 'none';
        
        document.getElementById('note').style.display = 'block';
    }
    
    showCurrentPatientList();
    showRequestedPatientList();
}


function currentPatient(title, name) {
    return {
        title,
        name
        
    }
}

const currentPatients = [
    currentPatient('user1', 'Dipjol'),
    currentPatient('user2', 'Trump'),
    currentPatient('user3', 'Kim')
];

let hashCurrentPatient = {};
currentPatients.forEach(element1 => hashCurrentPatient[element1.title] = element1);

function requestedPatient(title, name) {
    return {
        title,
        name
        
    }
}

const requestedPatients = [
    requestedPatient('user4', 'Sheikh'),
    requestedPatient('user5', 'Mujibur' ),
    requestedPatient('user6', 'Rahman' )
];

let hashRequestedPatient = {};
requestedPatients.forEach(element2 => hashRequestedPatient[element2.title] = element2);
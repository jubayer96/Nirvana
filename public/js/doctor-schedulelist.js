function Patient(title, name) {
    return {
        title,
        name,
        date,
        time
        
    }
}

const patients = [
    Patient('user1', 'Dipjol', '2019-12-01' , '14:30' ),
    Patient('user2', 'Trump', '2019-12-03' , '10:30'),
    Patient('user3', 'Kim', '2019-12-02' , '16:30')
];

let hashPatient = {};
patients.forEach(element3 => hashPatient[element3.date] = element3);
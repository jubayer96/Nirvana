function patientDetails(title, name, dob, address, phone,  email, password) {
    return {
        title,
        name,
        dob,
        address,
        phone,
        email,
        password
    }
}

const patientList = [
    patientDetails('user1', 'Zahid Hasan', '1998-01-10', 'KTDI, UTM', '011837492938', 'zahid@gmail.com', 'abc123'),
    patientDetails('user2', 'Kim Zong', '1968-02-20', 'Seoul, Korea', '011837002917', 'kim@gmail.com', 'abc123'),
    patientDetails('user3', 'Donald Trump', '1958-03-30', 'Washington, USA', '011837429472', 'trump@gmail.com', 'abc123')
];


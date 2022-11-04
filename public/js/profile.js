function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            document.getElementById('proimg').src=e.target.result
        };
        reader.readAsDataURL(input.files[0]);
    }
}

function turnEditOn(button) {

    const attributes = ['name', 'dob', 'address', 'phone', 'email', 'pass'];

    attributes.forEach(
        (attr) => document.getElementById(attr).readOnly = false
    );

    document.getElementById('imguploader').style.display = "inline";

    button.innerHTML = "Save";
    button.addEventListener('click', function() {
        saveEditPatient(this);
     });
}

function saveEditPatient(button) {

    const attributes = ['name', 'dob', 'address', 'phone', 'email', 'pass'];

    attributes.forEach(
        (attr) => document.getElementById(attr).readOnly = true
    );

    document.getElementById('imguploader').style.display = "none";

    button.innerHTML = "Edit";

    button.addEventListener('click', function() {
       turnEditOn(this);
    });
}
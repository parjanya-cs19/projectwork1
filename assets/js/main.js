


function validateHodEmail()
{
    // characters.cse@bmsce.ac.in
    var email = document.getElementById('hodEmail').value;
    var result = email.match('[a-z]+.cse@bmsce.ac.in');
    if(result==email)
    {
        return true;
    }
    else
    {
        return false;
    }
}

function validateFacultyEmail()
{
    // characters.cse@bmsce.ac.in
    var email = document.getElementById('facultyEmail').value;
    var result = email.match('[a-z]+.cse@bmsce.ac.in');
    if(result==email)
    {
        return true;
    }
    else
    {
        return false;
    }
}

function validateFacultyPassword()
{
    if(validateFacultyEmail() == true && document.getElementById('facultyPassword').value != '')
    {
        location.replace("https://www.google.com");
    }
    else{
        alert('Email Format is invalid !');
    }
}

function validateHodPassword()
{
    if(validateHodEmail() == true && document.getElementById('hodPassword').value != '')
    {
        location.replace("https://www.google.com");

    }
    else{
        alert('Email Format is invalid !');
    }

}



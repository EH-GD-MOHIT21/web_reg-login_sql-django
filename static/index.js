t = 300;
number = 0;
limit = 0;


function sendEmail(mail) {
    if (limit) {
        return number;
    }
    limit += 1;
    number = Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000;
    var name = document.getElementById("name").value;
    if (name == '') {
        name = "There";
    }
    Email.send({
        SecureToken: "fbf31702-bb7f-4a4e-9c1c-4ccf17ee777f",
        To: mail,
        From: "no.reply.python.py@gmail.com",
        Subject: "Your OTP For One Time Crediantials by NestedForms.com",
        Body: "Hello " + name + ". Your One Time Password For Login is " + number + " is valid for 5 minutes. Please Don't Refresh Your Browser Window.",
    }).then(function(response) {
        if (response == 'OK') {
            t = 300;
            id = setInterval(timer, 1000);
        } else {
            alert(response);
        }
    });
    return number;
}

function handler() {
    document.getElementById("otp-gen").disabled = true;
    var mail = document.getElementById("mail").value;
    if (t <= 2 || t == 300) {
        number = sendEmail(mail);
        document.getElementById("otp-gen").disabled = false;
    }
}

function timer() {
    t = t - 1;
    if (t == 1) {
        document.getElementById("otp-gen").disabled = false;
        number = 0;
    }
    if (t >= 0)
        document.getElementById("timeshower").innerText = "Time: " + t + " Sec";
    else {
        clearInterval(id);
    }
}

function validate() {
    var name = document.getElementById("name").value;
    var lname = document.getElementById("lname").value;
    var otp = document.getElementById("otp").value;
    var pass = document.getElementById("pass").value;
    var pass1 = document.getElementById("pass1").value;
    var age = document.getElementById("age").value;
    var uname = document.getElementById("uname").value;
    for (var i = 0; i < name.length; i++) {
        if ((name[i] < 65 || name[i] > 122) || (name[i] > 90 && name[i] < 97)) {
            alert("name should contain a-z or A-Z");
            return false;
        }
    }
    for (var i = 0; i < lname.length; i++) {
        if ((lname[i] < 65 || lname[i] > 122) || (lname[i] > 90 && lname[i] < 97)) {
            alert("last name should contain a-z or A-Z");
            return false;
        }
    }
    if (age < 15 || age > 80) {
        alert("age should be valid.");
        return false;
    }
    for (var i = 0; i < uname.length; i++) {
        if (uname[i] == "'" || uname[i] == '"' || uname[i] == " ") {
            alert("username should not contain any quotes.")
            return false;
        }
    }
    if (pass != pass1 || pass.length < 8) {
        alert("password should be same and length should be minimum 8.")
        return false;
    }
    if (number != otp) {
        alert("otp expired please regenerate otp or try again.")
        return false;
    }
    if (otp.length != 6) {
        return false;
    }
    alert("You're Redirecting...");
    return true;
}
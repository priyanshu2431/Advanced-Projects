function validation() {
    let form = document.getElementById('form');
    let email = document.getElementById('email').value;
    let text = document.getElementById('text');
    var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if(email.match(pattern))
    {
        form.classList.add('valid');
        form.classList.remove('invalid');
        text.innerHTML = "Your Email Address is Valid.";
        text.style.color = "#00ff00";
    }
    else
    {
        form.classList.remove('valid');
        form.classList.add('invalid');
        text.innerHTML = "Please enter valid Email Address";
        text.style.color = "#ff0000";
    }

    if(email == "")
    {
        form.classList.remove('valid');
        form.classList.remove('invalid');
        text.innerHTML = "";
        text.style.color = "#00ff00";   
    }
}
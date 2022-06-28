document.addEventListener("DOMContentLoaded", function(){
    document.querySelector('form #email').onkeyup = function(){
        hide(".message");
        hide(".error-img");
        document.querySelector("form input").style.border = " 2px solid hsl(0, 80%, 86%)";
    }
    document.querySelector('form').onsubmit = function(){
        let email = document.querySelector('form #email').value;
        if(email == ''){
            document.querySelector("form .message").innerHTML = "Email cannot be empty !";
            document.querySelector("form .message").style.color = 'hsl(0, 93%, 68%)';
            document.querySelector("form input").style.border = " 2px solid hsl(0, 74%, 74%)";
            display(".message");
            display(".error-img");
;        }else{
            if(checkEmail(email)){
                document.querySelector("form .message").innerHTML = "Email sent sucessfully !";
                document.querySelector("form .message").style.color = 'hsl(154, 59%, 51%)';
                display(".message");
                reset();         
            }else{
                document.querySelector("form .message").innerHTML = "Enter a Valid Email !";
                document.querySelector("form .message").style.color = 'hsl(0, 93%, 68%)';
                document.querySelector("form input").style.border = " 2px solid hsl(0, 74%, 74%)";
                display(".message");
                display(".error-img");
            }
        }
        return false;
    };
});
function display(className){
    document.querySelector(`form ${className}`).style.display = "block";
}
function hide(className){
    document.querySelector(`form ${className}`).style.display = "none";
}
function reset(){
    document.querySelector("form #email").value = "";
}
function checkEmail(email) {
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!filter.test(email)) {
        return false;
    }
    return true;
}
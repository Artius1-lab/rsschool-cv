var message = document.getElementById('email_popup_id');
var message_password = document.getElementById('password_popup_id');
document.getElementById('sign_in_popup_id').addEventListener("click", function() {
    alert("E-mail: " +message.value+" Password: "+message_password.value); 
    
});



function startsignpopup (){
    document.getElementById('popup_id').style.height = '500px';
    //document.getElementById('popup_id').style.width = '500px';

    document.getElementById("email_popup_id").style.margin = "100px 15px";
    document.getElementById("password_popup_id").style.margin = "-150px 15px";
    document.getElementById("label__text_email_id").style.margin = "-175px 15px";
    document.getElementById("label__text_password_id").style.margin = "-150px 15px";
    document.getElementById("sign_in_popup_id").style.margin = "-150px 0px";
    document.getElementById("line_popup_id").style.margin = "-150px 0px";
    document.getElementById("account_popup_id").style.margin = "-150px 0px";
    document.getElementById("register_popup_id").style.margin = "150px 380px";
    document.getElementById("register_popup_id").style.whiteSpace = "nowrap";

    var logElem = document.querySelector(".log_popup");
    logElem.textContent = "Create account";   
    
    var logElem_ = document.querySelector(".account_popup");
    logElem_.textContent = "Already have an account? ";

    //var logElem_register = document.querySelector(".register_popup");
    //var a = logElem_register.textContent = "Log"+" "+"in";
    let popupBg = document.querySelector('.popup__bg');
    let popup = document.querySelector('.popup');


    document.querySelector(".register_popup").innerHTML='<div class="registerLink" id="registerLink_id">Log in</div>';
    //document.querySelector(".registerLink").addEventListener("click",(e) => {
      //  e.preventDefault();
       // popupBg.classList.add('active');
        //popup.classList.add('active');
        
   // let a = document.location.reload(true);   
    
                 
    //})
            
                    

        

    var button_signup = document.querySelector(".sign_in_popup");
    button_signup.textContent = "Sign Up";

    facebook_popup_id.hidden=true;
    google_popup_id.hidden=true;
    facebook_one_id.hidden=true;
    google_one_id.hidden=true;
    line_left_popup_id.hidden=true;
    line_right_popup_id.hidden=true;
    or_popup_id.hidden=true;
    forgot_your_password_id.hidden=true;
    
}



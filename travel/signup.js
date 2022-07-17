function startsignpopup(){
    document.getElementById('popup_id').style.height = '500px';
    //document.getElementById('popup_id').style.width = '500px';
    

    log_popup_id.hidden = true;
    facebook_popup_id.hidden=true;
    google_popup_id.hidden=true;
    facebook_one_id.hidden=true;
    google_one_id.hidden=true;
    line_left_popup_id.hidden=true;
    line_right_popup_id.hidden=true;
    or_popup_id.hidden=true;

    

}


function reload_interval(time){
	setTimeout(function(){
		location.reload();
	}, time);
}

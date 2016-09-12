
$(document).ready(function(){
	$(document).on('keyup',function(e){
        if(e.keyCode === 13){
        	validate();
        }
    });
});
var validate = function() {
	var name = document.getElementById("login_name").value;
	var pass = document.getElementById("pass").value;
	if (name == "yuhang" && pass == "888888") {
		document.write("<form action='login' method='post' name='formx1' style='display:none'>");
		document.write("<input type='text' name='login_name' value='" + name + "'>");
		document.write("<input type='password' name='pass' value='" + pass + "'>");
		document.write("</form>");
		document.formx1.submit();
	} else {
		$("#errorModal").modal({backdrop : "static"});
	}
};

var regist = function() {
	window.location = "pages/jsp/regist.jsp";
};


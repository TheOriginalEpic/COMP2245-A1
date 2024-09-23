var checkLogin = function() {
    if (!sessionStorage.getItem("member")) {
		window.location.href = "member_login.html";
	}
}

var signOut = function() {
    sessionStorage.removeItem("member");
    window.location.href = "member_login.html";
}
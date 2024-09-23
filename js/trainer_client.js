var checkLogin = function() {
    if (!sessionStorage.getItem("trainer")) {
		window.location.href = "trainer_login.html";
	}
}

var signOut = function() {
    sessionStorage.removeItem("trainer");
    window.location.href = "trainer_login.html";
}
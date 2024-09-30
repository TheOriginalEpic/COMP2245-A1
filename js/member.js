function loadData() {
	var trainers = [
		{
			email: "a.pryor@fitnessu.life",
			firstName: "Andrew",
			lastName: "Pryor",
			password:"@ndr#wPry0r123"
		},

		{
			email: "jjd@fitnessuniverse.com",
			firstName: "Jennifer",
			lastName: "Davis",
			password:"Anoth3rpa$$"
		},

		{
			email: "boss_man@fitnessuniverse.bb",
			firstName: "Anderson",
			lastName: "Alleyne",
			password:"Pa$sw0rd"
		}
	]

	var managers = [
		{
			email: "todd.phillips@fitnessu.life",
			firstName: "Todd",
			lastName: "Phillips",
			password:"M3nt10#@1T"
		},

		{
			email: "marsh.fredrick@fitnessuniverse.com",
			firstName: "Marsh",
			lastname: "Fredrick",
			password:"gRenT1l$@l3"
		},

		{
			email: "gene.rodenberry@fitnessuniverse.bb",
			firstName: "Gene",
			lastName: "Rodenberry",
			password:"th3#@st3RPl@n"
		}
	]

	var members = [
		{
			year: "2018",
			member_id: "949309",
			firstName: "Merissa",
			lastName: "Halliwall",
			email: "mm_h@hotmail.com",
			password:"f1rstPa$$",
			address: "Lodge Road Ch Ch"
		},

		{
			year: "2019",
			member_id: "901440",
			firstName: "Terold",
			lastName: "Bostwick",
			email: "terold.bostwick@gmail.com",
			password:"Secur3@cc3s5",
			address: "7 Jasmine Ridge St James"
		},

		{
			year: "2020",
			member_id: "940830",
			firstName: "Vanda",
			lastName: "Marshall",
			email: "vmarhsall@guardian.co.uk",
			password:"Oll1p&p$",
			address: "Sargeants Village Tenantry Ch Ch"
		},

		{
			year: "2018",
			member_id: "910948",
			firstName: "Winston",
			lastName: "Greaves",
			email: "winston@bimap.gov.bb",
			password:"f03verP@ssword",
			address: "33 Welches Terrace"
		},

		{
			year: "2019",
			member_id: "921035",
			firstName: "Mark",
			lastName: "Belgrave",
			email: "bboy89@hotmail.com",
			password:"246Bajan#1",
			address: "76 Edghill Terrace"
		},

		{
			year: "2020",
			member_id: "906059",
			firstName: "Pamalee",
			lastName: "Gaskin",
			email: "pamgask99@gmail.com",
			password:"pamal3G#$k",
			address: "Lot 33 The Belle"
		}
	]

	//add to localStorage
	if(!localStorage.getItem("trainers")) {
		localStorage.setItem("trainers", JSON.stringify(trainers));
	}

	if(!localStorage.getItem("managers")) {
		localStorage.setItem("managers", JSON.stringify(managers));
	}

	if(!localStorage.getItem("members")) {
		localStorage.setItem("members", JSON.stringify(members));
	}
}


// Stores the webpage html as an object in variable "docDOM"
var docDOM = document;


// Variable function "errorDisplay" displays text on the screen dependent on string entered and an ID to target
// if no string is entered then the targeted element by ID's string is cleared
var errorDisplay = function(err, id) {
	let errorString = [];

	if (err.length != 0) {
		errorString.push(err);
		docDOM.getElementById(id).style.display = "block";

		if (errorString.length > 1) {
			docDOM.getElementById(id).innerHTML = errorString.join("<br>");
		} else if (errorString.length == 1) {
			docDOM.getElementById(id).innerHTML = errorString[0];
		}
	} else {
		docDOM.getElementById(id).style.display = "none";
		docDOM.getElementById(id).innerHTML = "";
	}
}


// Variable function "verifyMemberNumber" checks the inputted number to ensure it is:
// 6 charcters in length,
// is a valid number, and
// starts with the number 9
var verifyMemberNumber = function(mid) {
	let IntParse = parseInt(mid);

	if (mid.length == 6 && isNaN(IntParse) == false && parseInt(mid[0]) == 9) {
		return true;
	}

	return false;
}


// Variable function "verifyPassword" checks the inputted password to ensure it is:
// between 8 - 16 characters long,
// has at least one of the following special characters: &, $, #, @ and
// has at least one upper case letter and at least one number.
var verifyPassword = function(pwd) {
	let specialChar = ['&', '$', '#', '@'];
	let passLength = pwd.length;

	let hasNumber = false;
	let hasCapital = false;
	let hasSpecial = false;
	let hasCommon = false;
	let hasWrongSpecial = false;

	if (pwd.length >= 8 && pwd.length <= 16) {
		for (let loop = 0; loop < passLength; loop++) {
			let pwdchar = pwd[loop];

			if (specialChar.includes(pwdchar)) {
				hasSpecial = true;
			} else if (pwdchar >= 'A' && pwdchar <= 'Z') {
				hasCapital = true;
			} else if (pwdchar >= 'a' && pwdchar <= 'z') {
				hasCommon = true;
			} else if (parseInt(pwdchar) >= 0 && parseInt(pwdchar) <= 9) {
				hasNumber = true;
			} else {
				hasWrongSpecial = true;
			}
		}
	}

	if (hasNumber && hasCapital && hasSpecial && hasCommon && !hasWrongSpecial) {
		return true;
	}

	return false;
}


// Variable function "loginMember" send the user to a specific page after their password and member number is verification
// After successful verification and validation users info is stored in session storage
var loginMember = function(data) {
	let formData = JSON.parse(data);
	let memberInput = formData["member_id"];
	let passInput = formData["password"];
	let memberStorage = JSON.parse(localStorage.getItem("members"));
	let memberLength = memberStorage.length;
	let memberObject = new Object();

	if (!verifyPassword(passInput)) {
		errorDisplay("The password you entered has the incorrect format", "form-err-text");
		return false;
	} else if (!verifyMemberNumber(memberInput)) {
		errorDisplay("The member # you entered has the incorrect format", "form-err-text");
		return false;
	}

	for (let loop = 0; loop < memberLength; loop++) {
		if (memberStorage[loop]["member_id"] == memberInput && memberStorage[loop]["password"] == passInput) {
			sessionStorage.clear();

			memberObject["member_id"] = memberStorage[loop].member_id;
			memberObject["firstName"] = memberStorage[loop].firstName;
			memberObject["lastName"] = memberStorage[loop].lastName;

			sessionStorage.setItem("member", JSON.stringify(memberObject));
			break;
		}
	}

	if (!sessionStorage.getItem("member")) {
		errorDisplay("This user does not exsist.", "form-err-text");
		return false;
	}

	// window.location.href = '';

	errorDisplay("", "form-err-text");
	return true;
}


// Redirects user to member login page if there is no seesion storage data
var checkLogin = function() {
	if (!sessionStorage.getItem("member")) {
		window.location.href = "member_login.html";
	}
}


// Redirects user to member login page if they click the signout button in the hamburger menu
// Users session storage is cleared
var signOut = function() {
	sessionStorage.clear();
	window.location.href = "member_login.html";
}
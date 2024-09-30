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


// Variable function "verifyEmail" checks the inputted email to ensure that the domain name is one of three values: fitnessuniverse.com, fitnessuniverse.bb or fitnessu.life and is a correctly formatted email address.
var verifyEmail = function(email) {
	let emailLCase = email.toLowerCase();
	let emailLen = emailLCase.length;
	let atCounter = 0;
	let allowedChars = ["_", "."];
	let domainList = ["fitnessuniverse.com", "fitnessuniverse.bb", "fitnessu.life"];

	let domain;
	let user;
	let userLen;

	for (let loop = 0; loop < emailLen; loop++) {
		if (emailLCase[loop] == '@') {
			atCounter += 1;
		}
	}

	if (atCounter > 0 && atCounter < 2) {
		domain = emailLCase.split("@");
		user = domain[0];
		userLen = domain[0].length;

		if (!domainList.includes(domain[1])) {
			return false;
		}

		for (let loop = 0; loop < userLen; loop++) {
			if (!(user[loop] >= 'a' && user[loop] <= 'z') && !(parseInt(user[loop]) >= 0 && parseInt(user[loop]) <= 9) && !allowedChars.includes(user[loop])) {
				return false;
			} else if (allowedChars.includes(user[0]) || allowedChars.includes(user[user.length - 1])) {
				return false;
			} else if (allowedChars.includes(user[loop]) && (user[loop] == user[loop + 1])) {
				return false;
			}
		}

	} else {
		return false;
	}

	return true;
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


// Variable function "loginEmployee" send the user to a specific page after their password and member number is verification
// After successful verification and validation users info is stored in session storage
var loginEmployee = function(data) {
	let formData = JSON.parse(data);
	let emailInput = formData["email"];
	let passInput = formData["password"];
	let employeeInput = formData["employee"];
	let managerStorage = JSON.parse(localStorage.getItem("managers"));
	let managerLength = managerStorage.length;
	let managerObject = new Object();

	if (!verifyPassword(passInput)) {
		errorDisplay("The password you entered has the incorrect format", "form-err-text");
		return false;
	}

	if (!verifyEmail(emailInput)) {
		errorDisplay("The email you entered has the incorrect format", "form-err-text");
		return false;
	}

	if (employeeInput == "manager") {
		for (let loop = 0; loop < managerLength; loop++) {
			if (managerStorage[loop]["email"] == emailInput && managerStorage[loop]["password"] == passInput) {
				sessionStorage.clear();

				managerObject["email"] = managerStorage[loop].email
				managerObject["firstName"] = managerStorage[loop].firstName;
				managerObject["lastName"] = managerStorage[loop].lastName;

				sessionStorage.setItem("manager", JSON.stringify(managerObject));
				break;
			}
		}
	}

	if (!sessionStorage.getItem("manager")) {
		errorDisplay("This user does not exsist.", "form-err-text");
		return false;
	}

	// window.location.href = '';

	errorDisplay("", "form-err-text");
	return true;
}


// Variable function "findLostPassword" checks the inputted email with the dataset and displays a message dependent on if the email exsists or does not
var findLostPassword = function(data) {
	let formData = JSON.parse(data);
	let emailInput = formData["email"];
	let employeeInput = formData["employee"];
	let managerStorage = JSON.parse(localStorage.getItem("managers"));
	let managerLength = managerStorage.length;
	let emailFound = false;

	if (!verifyEmail(emailInput)) {
		errorDisplay("The email you entered has the incorrect format", "form-rErr-text");
		return false;
	}

	if (employeeInput == "manager") {
		for (let loop = 0; loop < managerLength; loop++) {
			if (managerStorage[loop]["email"] == emailInput) {
				emailFound = true;
				break;
			}
		}

		if (emailFound) {
			docDOM.getElementById("forgot-popup").style.display = "block";
			docDOM.getElementById("forgot-popup").innerHTML = "Recovery link sent";
		} else {
			docDOM.getElementById("forgot-popup").style.display = "block";
			docDOM.getElementById("forgot-popup").innerHTML = "No account associated <br>with email: " + emailInput;
		}
	}

	errorDisplay("", "form-rErr-text");
	return false;
}

// Redirects user to member login page if there is no seesion storage data
var checkLogin = function() {
    if (!sessionStorage.getItem("manager")) {
		window.location.href = "admin_login.html";
	}
}


// Redirects user to member login page if they click the signout button in the hamburger menu
// Users session storage is cleared
var signOut = function() {
    sessionStorage.clear();
    window.location.href = "admin_login.html";
}
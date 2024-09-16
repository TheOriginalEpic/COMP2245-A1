/**
* loadData function for Assignment #1
*
* Add this function to your external JavaScript file. The simplest way to invoke it is
* to use the onload eventhandler on the body tag of the document, i.e. <body onload="loadData()">.
* If successful, you should be able to see three sets of data in localStorage the first is
* trainer information (trainers), the second is manager information (managers) and the third is the member information (members).
* Feel free to modify this code to suit your field names if necessary.
*/
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
			lastname: "Davis",
			password:"Anoth3rpa$$"
		},

		{
			email: "boss_man@fitnessuniverse.bb",
			firstName: "Anderson",
			surname: "Alleyne",
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
			surname: "Rodenberry",
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

var errorString = '';

var verifyMemberNumber = (mid) => {
    let IntParse = parseInt(mid);

    if (mid.length == 6 && isNaN(IntParse) == false && parseInt(mid[0]) == 9) {

        return true;
    }

    return false;
}

var verifyPassword = (pwd) => {
    let specialChar = ['&', '$', '#', '@'];
    let passLength = pwd.length;

    let hasNumber = false;
    let hasCapital = false;
    let hasSpecial = false;
    let hasCommon = false;
    let hasWrongSpecial = false;

    if (pwd.length >= 8 && pwd.length <= 16) {
        for (loop = 0; loop < passLength; loop++) {
            if (specialChar.includes(pwd[loop])) {
                hasSpecial = true;
            } else if (pwd[loop] >= 'A' && pwd[loop] <= 'Z') {
                hasCapital = true;
            } else if (pwd[loop] >= 'a' && pwd[loop] <= 'z') {
                hasCommon = true;
            } else if (parseInt(pwd[loop]) >= 1 && parseInt(pwd[loop]) <= 9) {
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

var loginMember = (data) => {
    let formData = JSON.parse(data);
    let memberInput = formData["member_id"];
    let passInput = formData["password"];
    let memberStorage = JSON.parse(localStorage.getItem("members"));
    let memberLength = memberStorage.length;
    let sessionObject = {};

    if (!verifyPassword(passInput)) {
        errorString += "The password you entred has the incorrect format. ";

        // console.log("The password you entred has the incorrect format. \nPlease make sure that password is between 8 - 16 characters long, \nconsists of alphanumeric characters including a special character: &, $, #, @ \nand has at least one upper case letter and one number.");
    }

    if (!verifyMemberNumber(memberInput)) {
        errorString += "The member # you entred has the incorrect format. ";

        // console.log("The member number you entred has the incorrect format. \nPlease make sure it starts with the number '9' followed by five numeric characters");
    }

    if (errorString) {
        return errorString;
    }

    for (loop = 0; loop < memberLength; loop++) {
        if (memberStorage[loop]["member_id"] == memberInput && memberStorage[loop]["password"] == passInput) {
            sessionObject["member_id"] = memberStorage[loop].member_id;
            sessionObject["firstName"] = memberStorage[loop].firstName;
            sessionObject["lastName"] = memberStorage[loop].lastName;

            sessionStorage.clear();
            sessionStorage.setItem("memberLogin", JSON.stringify(sessionObject));
            break;
        }
    }

    if (!sessionStorage.getItem("memberLogin")) {
        errorString = "This user does not exsist.";
    }

    return '';
}

var invalidMember = () => {

}
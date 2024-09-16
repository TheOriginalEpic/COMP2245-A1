# COMP2245-A1
This is my first assignment for my class COMP2245 Web Development Concepts, Tools and Practice. I am tasked to create a website for a gym managment system. The system will allow administrators to enrol new gym members and sign on personal trainers. It will allow personal trainers to see the training session schedule and book personal training sessions with members. Members will be able to see their accounts and any personal training sessions they have. Everyone will be able to view the activities scheduled in the gym using the ubiquitous Gym Schedule link that is part of the hamburger menu that is found on the top left corner of most of the pages. The functional requirements that must be met for this assignment are described below.

1. Figure 1 shows the starting console page of the management system. The HTML file for this page is named **index.html**. It is the first page that everyone who is not logged in, or has been logged out, sees of the application.

![Screenshot 2024-09-16 065415](https://github.com/user-attachments/assets/c4876489-6539-48fb-b900-78ce8ee72821)<br>
**<sub>Figure 1: The main page for the application</sub>**

- The image in the top right-hand corner is the company’s logo. Select or create an image that is 80x86 pixels in size to make the logo. If you have selected an image from the web, ensure that it is at least under the [Creative Commons licence](https://en.wikipedia.org/wiki/Creative_Commons_license#Types_of_license).

- The two large buttons are clickable. The Members button goes to Members log in page and the Trainers button goes to the Trainers login page.


2. The Members Login page is shown in Figure 2. The HTML file for this page must be named
**member_login.html**.

   - The hamburger menu in the top left corner of the page, when clicked, displays a dropdown menu that has the non-clickable menu item View Schedule as its only menu item.

   - The page requires two pieces of information: the gym member’s id number and their password. The Forgot Password link remains on the page when clicked. The data format for the membership id and password must be validated by separate JavaScript functions, which are invoked when the Log In button is clicked. These functions can use JavaScript string manipulation and other functions, but no regular expressions.

![Screenshot 2024-09-16 073022](https://github.com/user-attachments/assets/12b51fed-21bd-4d5b-aac4-4d64c9da2662)<br>
**<sub>Figure 2: The Member Login page</sub>**

- **verifyMemberNumber(mid)**. Takes the string entered in the Membership # textbox as parameter mid and returns a Boolean value that indicates whether the string is in the correct format. A valid membership number starts with the number 9 followed by five numeric characters to form a six-digit number.

- **verifyPassword(pwd)**. Takes the string entered in the password textbox as parameter pwd and returns a Boolean value that indicates whether the string is in the correct format. A valid password must: (i) be between 8 - 16 characters long; (ii) mainly consist of alphanumeric characters but must have at least one of the following special characters: &, $, #, @ and; (iii) have at least one upper case letter and at least one number.

- Create a JavaScript function called loginMember(data) that takes the form’s user input in JSON format through the data parameter. It invokes the verifyMemberNumber and verifyPassword functions to check the user input and if either of these functions return false, then loginMember generates one or more error messages and stops any further processing.<br>
If no errors are generated, the verified membership number and password are checked against entries in the members localStorage dataset. If the user-entered membership number/password pair matches an entry in localStorage with the same membership and password, then the full entry is retrieved and used to update the members sessionStorage dataset with the first name, last name and membership number. If no valid entry is found, then the function should return an error message as a string, otherwise, it returns an empty error string.

- Error messages generated either from an improperly formatted username or password, or if the user is not a valid user, must be displayed in red text between the Member Login label and the Membership # textbox. No dialog boxes are to be used to display JavaScript error messages.

## Tasks
- [ ] Start with the page design and ensure it is mobile first responsive. Pick any colour scheme/theme you like that is appropriate.
- [ ] Write JavaScript functions and make sure they produce the correct output.
- [ ] \(Optional) Create function to display error messages to make your code more modular.
- [ ] Write login in functions and make sure that the application pages are only accessible to a logged in user. Create a checkLogin JavaScript function that checks to see if the user is logged in.
- [ ] \(Optional) Implement Sign Out functionality.
- [x] Complete Part 1
- [ ] Complete Part 2
- [ ] Complete Part 3
- [ ] Complete Part 4
- [ ] Complete Part 5
- [ ] Complete Part 6
- [ ] Complete Part 7
- [ ] Complete Part 8

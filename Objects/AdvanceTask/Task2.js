// 2. User Management for a Web Application:
//    Design a user management module for a web application. Each user object should contain properties like "userID", "username", "email", "password", "roles", and "lastLogin". Implement functions to register new users, authenticate existing users, update user profiles, and manage user roles.



//computed properties
// var key1 = "userId";
// var key2 = "userName";
// var key3 = "userEmail";
// var key4 = "userPass";
// var key5 = "userRoles";
// var key6 = "userLastLogin";

var totalUserID = 0;

//users array of objects
var Users = [];

//support functions
function currentTime() {
    const loginTime = new Date();
    return ((loginTime.getHours()).toString() + ":" + (loginTime.getMinutes()).toString());
}
function updateUserDetails(i) {
    let choice = +prompt("1.Update user name, 2.update email, 3.update password,0.Not to update anything");
    switch(choice) {
        case 1:
            Users[i].userName = prompt("Enter New UserName :");
            alert(`userName Updated to ${Users[i].userName}.`);
            break;
        case 2:
            Users[i].userEmail = prompt("Enter New UserEmail :");
            alert(`Email is changed to ${Users[i].userEmail}.`);
            break;
        case 3:
            Users[i].userPass = prompt("Enter New PassWord :");
            alert(`PassWord is Changed For ${Users[i].userName}.`);
            break;
        case 0:
            alert(`Saving User Information Without Any Update.`);
            break;
        default :
            console.error("ERROR : Invalid input, please Try Again.");
            break;
    }
    delete choice;
}

//main operations
function addUser() {
    totalUserID++;
    let newUser = {
        userId : totalUserID,
        userName : prompt("Enter UserName :"),
        userEmail : prompt("Enter User Email :"),
        userPass : prompt("Enter PassWord :"),
        userRoles : prompt("Enter Your Role (student, teacher, employee):"),
        userLastLogin : currentTime(),
    }
    Users.push(newUser);
    console.info(`New User Joined .`);
    alert(`Welcome, ${newUser.userName}`);
}

//for sir
function authenticateUser() {

}


function updateUser() {
    let tempUserId = +prompt("Enter Your UserId :");
    let userToUpdate = Users.find(user => user.userId === tempUserId);
    if(userToUpdate) {
        console.info("UserId found.");
        updateUserDetails(userToUpdate);
        console.info(`User Details Updated Successfully.`);
    }
    else {
        console.error("ERROR : User not found, please Try again with correct UserId.");
        return;
    }
}

function loginUser() {
    let tempUserName = prompt("Enter UserName :");
    let userToLogin = Users.find(user => user.userName === tempUserName);
    if(userToLogin) {
        let tempPass = prompt("Enter PassWord :");
        if(userToLogin.userPass === tempPass) {
            alert(`Login Successfully,\nWelcome, ${userToLogin.userName}.`);
            userToLogin.userLastLogin = currentTime();
        }
        else {
            alert("ERROR : Wrong PassWord, Please Try again.");
        }
    }
    else {
        alert("ERROR : UserName Not Found, please Try again.");
        return;
    }
}

function changeUserRoles() {
    let tempUserId = +prompt("Enter Your UserId :");
    let userToUpdate = Users.find(user => user.userId === tempUserId);
    if(userToUpdate) {
        console.info("UserId found.");
        userToUpdate.userRoles = prompt("Enter Your Role(student, teacher, employee) :");
        console.info(`User Role Updated Successfully.`);
    }
    else {
        console.error("ERROR : User not found, please Try again with correct UserId.");
        alert("ERROR : User not found, please Try again with correct UserId.");
        return;
    }
}

function displayUsers() {
    for(const i in Users) {
        console.log(`userId:${Users[i].userId}, userName:${Users[i].userName}, userEmail:${Users[i].userEmail}, userRole:${Users[i].userRoles}, lastLogin:${Users[i].userLastLogin}.`);
    }
}

var choice =0;
do{
    displayUsers();
    choice = +prompt("1.Create An Account, 2.Login, 3.Update UserInfo, 4.Update Role, Enter Choice :");

    switch(choice) {
        case 1:
            addUser();
            break;
        case 2:
            loginUser();
            break;
        case 3:
            updateUser();
            break;
        case 4:
            changeUserRoles();
            break;
        case 0:
            alert("Exiting the Program...");
            break;
        default :
            console.error("ERROR : Invalid input, please try again.");
            break;
    }

}while(choice !== 0);
let users = [
    {
        login: 'user@gmail.com',
        password: '111111',
        greeting: 'UserPass'
    },

    {
        login: 'admin@gmail.com',
        password: '111111',
        greeting: 'AdminPass'
    }
]

let i = 0;
let minLength = 6;
let minLengthNewPassword = 5;

let inputMail = prompt('Please enter your e-mail');

if (inputMail === '' || inputMail === null) {
    alert('Canceled.');
} else if (inputMail.length < minLength) {
    alert("I don't know any emails having name length less than 6 symbols");
} else {
    for (i; i < users.length; i++) {
        if (users[i].login === inputMail) {
            let password = prompt('Please enter your password');
            let id = i;
            if (users[id].password === password) {
                alert(users[id].greeting);
                let changePassword = confirm('Do you want to change your password?');
                if (changePassword === false) {
                    alert('You have failed the change.');
                    break;
                } else {
                    let repeatPassword = prompt('Please enter your old password');
                    if (users[id].password === repeatPassword) {
                        alert(users[id].greeting);
                        let newPassword = prompt('Please enter your new password');
                        if (newPassword.length < minLengthNewPassword) {
                            alert('It’s too short password. Sorry.');
                        } else if (newPassword === users[id].password) {
                            let repeatNewPassword = prompt('Enter the new password again.');
                            if (newPassword === repeatNewPassword) {
                                alert('You have successfully changed your password.');
                            } else {
                                alert('You wrote the wrong password.');
                            }
                        }
                        break;
                    } else {
                        alert('Wrong password');
                        break;
                    }
                }
            } else {
                alert('Wrong password');
                break;
            }
        } else if (users[users.length - 1].login !== inputMail) {
            alert('I don’t know you');
            break;
        }
    }
}
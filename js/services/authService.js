export class AuthService {
    login(name, user, password) {
        if (user === 'lucilvio' && password === 'homehome') {
            localStorage.setItem('auth-token', `{ "name": "${user}", "email": "${user}" }`);
        }
        else
            throw new Error('wrong user or password!');
    }

    logout() {
        localStorage.setItem('auth-token', null);
    }

    loggedUser() {
        return JSON.parse(localStorage.getItem('auth-token'));
    }

    isLoggedIn() {
        var token = localStorage.getItem('auth-token');
        return token !== '' && token !== undefined && token !== null && token !== "null";
    }
}
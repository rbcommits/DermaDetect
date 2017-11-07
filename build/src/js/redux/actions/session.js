import {sessionService} from 'redux-react-session';
import {browserHistory} from 'react-router';

const token = {
    token: '1a2b3c4d'
}
export const login = (user) => {
    return () => {
        return sessionService
            .saveSession({token})
            .then(() => {
                sessionService
                    .saveUser(user)
                    .then(() => {
                        browserHistory.replace('/');
                    });
            });

    };
};

export const logout = () => {
    return () => {
        return sessionService.deleteSession();
        sessionService.deleteUser();
        browserHistory.replace('/');
    };
};
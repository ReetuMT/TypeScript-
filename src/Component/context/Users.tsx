import React, { useContext } from 'react';
import { UserContext } from './UseContext';

const Users = () => {
    const userContext = useContext(UserContext);

    const handleLogin = () => {
        if (userContext) {
            userContext.setUser({
                name: 'Reetu',
                email: 'rm12@gmail.com'
            });
        }
    };

    const handleLogout = () => {
        if (userContext) {
            userContext.setUser(null);
        }
    };

    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <br />
            <div>
                {userContext?.user ? (
                    <>
                        <div>User Name is {userContext.user.name}</div>
                        <div>User email is {userContext.user.email}</div>
                    </>
                ) : (
                    <div>No user is logged in.</div> 
                )}
            </div>
        </div>
    );
};

export default Users;

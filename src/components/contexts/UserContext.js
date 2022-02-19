import React,{ useState } from 'react';

const UserContext = React.createContext("user");

const UserProvider = (props) => {
    const[user, setUser] = useState('');
//    const[userList, setUserList] = useState([]);

    function login(username, password) {
        if(username == "Matt" && password == "Pass"){
            setUser('Matt')
        }
    }

    function logout(){
        setUser('');
    }

    return(
        <UserContext.Provider value={{user,login,logout}}>
            {props.children}
        </UserContext.Provider>
    )
}
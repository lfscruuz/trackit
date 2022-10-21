import { useState, createContext } from "react";
import imagemDePerfil from '../assets/images/yotsuba.jpg'

const UserContext = createContext();

function UserProvider({children}) {
    const [user, setUser] = useState('');

    return(
        <UserContext.Provider value={{user, setUser}} >
            {children}
        </UserContext.Provider>
    )
}

export default UserContext;
export {UserProvider};
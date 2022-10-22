import { useState, createContext } from "react";
import imagemDePerfil from '../assets/images/yotsuba.jpg'

const UserContext = createContext();

function UserProvider({children}) {
    const [user, setUser] = useState('');
    const [progress, setProgress] = useState(0);

    return(
        <UserContext.Provider value={{user, setUser, progress, setProgress}} >
            {children}
        </UserContext.Provider>
    )
}

export default UserContext;
export {UserProvider};
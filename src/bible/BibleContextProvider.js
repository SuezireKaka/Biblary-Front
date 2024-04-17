import { createContext, useState } from "react";

const BibleContext = createContext({});

export const BibleContextProvider = ({ children }) => {
    const [nowBibleName, setBibleName] = useState("개역개정");
    
    
    return (
        <BibleContext.Provider value={{
            nowBibleName, setBibleName
        }}>
            {children}
        </BibleContext.Provider> 
    )
}

export default BibleContext;
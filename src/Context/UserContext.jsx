import{createContext,useState} from'react';
export const UserContext = createContext()




export const UserProviderLogin =({children})=>{

    const[user,setUser]= useState ({
        name:"guillermo",
        last_name:"sifuentes",
    })

   
    return(
        <UserContext.Provider value={{user,setUser}}>
            {children}
        </UserContext.Provider>

    )
}

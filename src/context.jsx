import { useState } from "react";
import { createContext } from "react";

export const MembersContext = createContext({
    name: ['bruno','maria','ana','joao']
})

export const MembersProvider = ({children}) =>{

    const [name, setName] = useState(['bruno','maria','ana','joao']);
    const [novalista, setNovaLista] = useState(['rafael','felipe','andre','sla'])
    const [troca, setTroca] = useState(false)

    return(
        <MembersContext.Provider value={{ name, setName, troca, setTroca, novalista}}>
            {children}
        </MembersContext.Provider>
    )
}
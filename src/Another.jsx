import { useContext } from "react"
import { MembersContext } from "./context"


export function Another({ nome }){

    const { troca, setTroca } = useContext(MembersContext)

    return(
        <>
            <h2>
                {nome}
            </h2>
            {
                console.log('antes ' + troca)
            }
            <button onClick={()=>{
                setTroca(prevState => !prevState)
            }}>
                Troca
            </button>
        </>
    )
}
import { useContext, useEffect } from "react";
import { Another } from "./Another";
import { MembersContext } from "./context";

export function Child(){

    const { name, troca, setName } = useContext(MembersContext)

    useEffect(() => {
      function trocaLista(){
        if(troca){
            setName(['rafael','felipe','andre','sla'])
        }
        else{
            setName(['bruno','maria','ana','joao'])
        }
      }

      trocaLista();
      
    }, [troca])
    

    return(
        <>
            <h1>
                Iam the child
            </h1>
            {
                name.map((nomes)=>(
                    <Another nome={nomes} />
                ))
            }
            <div>
                <button onClick={()=>{
                    setName(prevState => [...prevState, 'Novo'])
                }}>
                    Add
                </button>
            </div>
        </>
    )
}
import React,{useContext,createContext, ReactNode, useState, Dispatch, SetStateAction} from 'react'

type DnDContextType =[string | null , Dispatch<SetStateAction<string|null>>];
const DnDContext = createContext<DnDContextType | undefined> (undefined);
interface DnDProviderProps{
    children: ReactNode;
}
export const DnDProvider:React.FC<DnDProviderProps> = ({children}) => {
 const [type,setType]=useState<string | null>(null)
  return (
  <DnDContext.Provider value={[type,setType]}>
    {children}
  </DnDContext.Provider>
  )
}
export default DnDContext;

export const useDnD =(): DnDContextType =>{
    const context = useContext (DnDContext);
    if(!context){
        throw new Error ('useDnD must be use within a DnDProvider')
    }
    return context;
}
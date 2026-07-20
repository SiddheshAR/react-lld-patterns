import { createContext } from "react";


interface TabsContextValue {
    activeValue:string;
    setActiveValue:(value:string)=>void;
}

export const TabsContext =  createContext<TabsContextValue | undefined>(undefined)

export function useTabsContext(){
    
}
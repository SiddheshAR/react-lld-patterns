import {createContext, useContext} from 'react';

interface TabsContextValue  {
    activeValue:string;
    setActiveValue:(value:string)=>void
}

export const TabsContext = createContext<TabsContextValue  | undefined>(undefined);

export function useTabsContext(){
    const context = useContext(TabsContext);
    if(!context){
        throw new Error("Tabs component must be used within a <Tabs> Provider")
    }
    return context
}
import { useState, type ReactNode } from "react";
import { TabsContext } from "./TabsContext";


interface Tabs
    extends React.HTMLAttributes<HTMLDivElement> {
    defaultValue: string;
    value: string;
    onValueChange: (n:string) => void;
    children: ReactNode;
    classname: string;
}

export function Tabs({
    defaultValue,
    children,
    value,
    onValueChange,
    classname,
    ...props
}: Tabs) {
    const [internalValue, setInternalValue] = useState(defaultValue ?? "");
    const isControlled = value !== undefined;
    const activeValue = isControlled ? value : internalValue;
    function setActiveValue (val:string){
        if(isControlled){
            onValueChange(val)
        }
        setInternalValue(val);
    }
    return (
        <TabsContext.Provider
        value={{
            activeValue,
            setActiveValue
        }}
        >
            <div className={classname} {...props}>
                {children}
            </div>
        </TabsContext.Provider>
    )
}
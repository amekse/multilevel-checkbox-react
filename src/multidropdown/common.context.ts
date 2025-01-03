import { createContext } from "react";
import { CheckMemoryState, CheckObject } from "./common.types";

const OnChangeContext = createContext((id:number, label: string, checked: "all" | false, children:CheckObject[]) => {});

const MemoryContext = createContext<CheckMemoryState>({})

export {
    OnChangeContext,
    MemoryContext
}
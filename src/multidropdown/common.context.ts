import { createContext } from "react";
import { CheckMemoryState, UpdateMemoryFunction } from "./common.types";

const OnChangeContext = createContext<UpdateMemoryFunction>((id:number, label: string, checked: boolean) => {});

const MemoryContext = createContext<CheckMemoryState>({})

export {
    OnChangeContext,
    MemoryContext
}
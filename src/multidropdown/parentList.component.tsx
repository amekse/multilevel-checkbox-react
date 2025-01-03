import React, { useState } from "react";
import { CheckMemoryState, CheckObject, ParentListProp } from "./common.types";
import { MemoryContext, OnChangeContext } from "./common.context";
import checkedMemoryModel from "./models/checkedMemory.model";
import CustomCheckbox from "./customCheckbox.component";

function ParentList(props:ParentListProp) {
    const { checkList, onChange } = props;
    const [memory, updateMemory] = useState<CheckMemoryState>(checkedMemoryModel.getMemory());

    const handleCheckClick = (id:number, label: string, checked: "all" | false, children:CheckObject[]) => {
        checkedMemoryModel.set(id, label, checked, children);
        updateMemory(checkedMemoryModel.getMemory());
        onChange(checkedMemoryModel.getList());
    }

    return (
        <div>
            <OnChangeContext.Provider value={handleCheckClick}>
                <MemoryContext.Provider value={memory}>
                    {
                        checkList.map(item => <CustomCheckbox key={item.id} checkObject={item} />)
                    }
                </MemoryContext.Provider>
            </OnChangeContext.Provider>
        </div>
    )
}

export default ParentList;
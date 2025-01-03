import React, { useState } from "react";
import { CheckMemoryState, ParentListProp } from "./common.types";
import { MemoryContext, OnChangeContext } from "./common.context";
import checkedMemoryModel from "./models/checkedMemory.model";
import checkedListModel from "./models/checkedList.model";
import CustomCheckbox from "./customCheckbox.component";

function ParentList(props:ParentListProp) {
    const { checkList, onChange } = props;
    const [memory, updateMemory] = useState<CheckMemoryState>(checkedMemoryModel.get());

    const handleCheckClick = (id:number, label: string, checked: boolean) => {
        checkedMemoryModel.set(id, checked);
        updateMemory(_ => checkedMemoryModel.get());
        checkedListModel.set(id, label, checked);
        onChange(checkedListModel.get());
    }

    return (
        <div>
            <MemoryContext.Provider value={memory}>
                <OnChangeContext.Provider value={handleCheckClick}>
                    {
                        checkList.map(item => <CustomCheckbox checkObject={item} />)
                    }
                </OnChangeContext.Provider>
            </MemoryContext.Provider>
        </div>
    )
}

export default ParentList;
import React, { useContext } from "react";
import { CustomCheckBoxProp } from "./common.types";
import { MemoryContext, OnChangeContext } from "./common.context";
import CheckBox from "./checkbox.component";
import checkedMemoryModel from "./models/checkedMemory.model";

function CustomCheckbox(props:CustomCheckBoxProp) {
    const { checkObject } = props;
    const handleCheckChange = useContext(OnChangeContext);
    const memoryCheckStatus = (useContext(MemoryContext))[checkObject.id];

    return (
        <div key={`container-div-${checkObject.id}`}>
            <div style={{ display: "flex", flexDirection: "column"}}>
                <label style={{ display: 'flex', margin: '4px' }}>
                    <CheckBox 
                        key={`checkbox-wrap-${checkObject.id}`}
                        checked={checkedMemoryModel.checkChilrenMarkings(checkObject.children, checkObject.id, memoryCheckStatus || false)} 
                        onChange={checked => handleCheckChange(checkObject.id, checkObject.label, checked, checkObject.children)}
                        internalId={checkObject.id}
                    />
                    {checkObject.id} {checkObject.label}
                </label>
                <div style={{ marginLeft: '8px' }}>
                    {
                        checkObject.children.map(child => <CustomCheckbox key={child.id} checkObject={child} />)
                    }
                </div>
            </div>
        </div>
    )
}

export default CustomCheckbox;
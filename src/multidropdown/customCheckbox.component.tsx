import React, { useContext } from "react";
import { CustomCheckBoxProp } from "./common.types";
import { MemoryContext, OnChangeContext } from "./common.context";

function CustomCheckbox(props:CustomCheckBoxProp) {
    const { checkObject } = props;
    const handleCheckChange = useContext(OnChangeContext);
    const memoryCheckStatus = (useContext(MemoryContext))[checkObject.id];
    
    return (
        <div key={`container-div-${checkObject.id}`}>
            <div style={{ display: "flex", flexDirection: "column"}}>
                <label>
                    <input type="checkbox" checked={memoryCheckStatus || false} key={`input-check-${checkObject.id}`} onChange={e => handleCheckChange(checkObject.id, checkObject.label, e.target.checked)}/>{checkObject.id} {checkObject.label}
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
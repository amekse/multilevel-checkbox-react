import React from "react";
import { CustomCheckStatus } from "./common.types";

function CheckBox({checked, onChange}:{checked:CustomCheckStatus, onChange: (checked:CustomCheckStatus) => void}) {

    const handleClick = () => {
        if (checked) {
            onChange(false);
        } else {
            onChange("all");
        }
    }

    return (
        <div style={{ width: '30px', height: '30px', cursor: 'pointer' }} onClick={handleClick}>
            {
                checked === "some" && <span>&#10003;</span>
            }
            {
                checked === "all" && <span>&#10092;</span>
            }
        </div>
    )
}

export default CheckBox;
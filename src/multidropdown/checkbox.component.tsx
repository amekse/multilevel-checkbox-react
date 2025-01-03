import React from "react";
import { CustomCheckStatus } from "./common.types";
import "./checkbox.style.css";

function CheckBox({checked, onChange, internalId}:{checked:CustomCheckStatus, onChange: (checked:"all"|false) => void, internalId: number}) {
    const handleClick = () => {
        if (checked) {
            onChange(false);
        } else {
            onChange("all");
        }
    }

    return (
        <div className="checkbox" onClick={handleClick} key={`checkbox-div-${internalId}`}>
            {
                checked === "some" && <span key={`checkbox-div-some${internalId}`}>&#10092;</span>
            }
            {
                checked === "all" && <span key={`checkbox-div-all${internalId}`}>&#10003;</span>
            }
        </div>
    )
}

export default CheckBox;
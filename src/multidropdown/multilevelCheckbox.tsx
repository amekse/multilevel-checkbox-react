import React, { lazy, Suspense } from "react";
import { MultiLevelDropdownProps, UserCheckedObject } from "./common.types";

const LazyParentList = lazy(() => import("./parentList.component"));

function MultiLevelCheckbox(props:MultiLevelDropdownProps) {
    const { checkList, onChange = (checkList: UserCheckedObject[]) => null, customEventName = '' } = props;

    const handleCheckChange = (checkList: UserCheckedObject[]) => {
        onChange(checkList);

        if (customEventName !== '') {
            let triggerEventToParent = new CustomEvent(customEventName, {detail: checkList});
            window.dispatchEvent(triggerEventToParent);
        }
    }

    return (
        <div>
            <Suspense fallback={<span>Loading...</span>}>
                <LazyParentList checkList={checkList} onChange={handleCheckChange} />
            </Suspense>
        </div>
    )
}

export default MultiLevelCheckbox;
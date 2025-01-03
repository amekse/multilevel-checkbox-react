type CheckObject = {
    id: number,
    label: string,
    children: CheckObject[]
}

type UserCheckedObject = {
    id: number,
    label: string
}

/**
 * Represents the prop type defination for the standalone multi-level dropdown component
 */
type MultiLevelDropdownProps = {
    /**
     * Mandatory prop to get the list of checkbox details
     * A single checkbox will have id, label and optional children
     */
    checkList: CheckObject[],
    /**
     * Prop to send back the updated checkbox data like which ones are checked
     * @param checkList an exact replica of the provided prop checkList with the updated checks
     * @returns void
     */
    onChange?: (checkList: UserCheckedObject[]) => void,
    /**
     * Prop to dispatch custom event in case user want's to listen to the changes somewhere else
     */
    customEventName?: string
}

type ParentListProp = {
    checkList: CheckObject[],
    onChange: (checkList: UserCheckedObject[]) => void
}

type CheckMemoryState = {
    [key:number]: boolean | undefined
}

type CustomCheckBoxProp = {
    checkObject: CheckObject
}

type UpdateMemoryFunction = (id:number, label: string, checked: boolean) => void

export type {
    MultiLevelDropdownProps,
    CheckObject,
    UserCheckedObject,
    ParentListProp,
    CheckMemoryState,
    CustomCheckBoxProp,
    UpdateMemoryFunction
}
import { CheckMemoryState, CheckObject, CustomCheckStatus, UserCheckedObject } from "../common.types";

class CheckedMemoryModel {
    static #instance:CheckedMemoryModel;
    #defaultMemory:CheckMemoryState = {};
    #checkedList:UserCheckedObject[] = [];

    private constructor() {}

    public static get instance():CheckedMemoryModel {
        if(!CheckedMemoryModel.#instance) {
            CheckedMemoryModel.#instance = new CheckedMemoryModel();
        }

        return CheckedMemoryModel.#instance
    }

    checkChilrenMarkings(children:CheckObject[], id:number, memoryStatus:CustomCheckStatus):CustomCheckStatus {
        let status:CustomCheckStatus = false;
        let childrenCountAll = children.length > 0;
        let childrenCountSome = false;
        children.forEach(child => {
            if (this.#defaultMemory[child.id] !== "all") childrenCountAll = false;
            if (this.#defaultMemory[child.id] === "some" || this.#defaultMemory[child.id] === "all") childrenCountSome = true;
        })
        if (childrenCountSome) status = "some";
        if (childrenCountAll || this.#defaultMemory[id] === "all") status = "all";
        return status;
    }

    set(id:number, label: string, checked: "all" | false, children:CheckObject[]) {
        this.#defaultMemory[id] = checked;
        if (checked === "all") {
            this.#checkedList.push({
                id,
                label
            });
        } else {
            this.#checkedList = this.#checkedList.filter(item => item.id !== id);
        }
        if (children.length > 0) {
            children.forEach(child => {
                this.set(child.id, child.label, checked, child.children);
            })
        }
    }

    getMemory() {
        return structuredClone(this.#defaultMemory);
    }

    getList() {
        return structuredClone(this.#checkedList);
    }
}
const checkedMemoryModel = CheckedMemoryModel.instance;
export default checkedMemoryModel;


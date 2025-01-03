import { CheckMemoryState, UserCheckedObject } from "../common.types";

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

    set(id:number, label: string, checked: boolean) {
        this.#defaultMemory[id] = checked;
        if (checked) {
            this.#checkedList.push({
                id,
                label
            });
        } else {
            this.#checkedList = this.#checkedList.filter(item => item.id !== id);
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


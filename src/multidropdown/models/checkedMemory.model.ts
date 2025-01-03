import { CheckMemoryState } from "../common.types";

class CheckedMemoryModel {
    static #instance:CheckedMemoryModel;
    #defaultMemory:CheckMemoryState = {};

    private constructor() {}

    public static get instance():CheckedMemoryModel {
        if(!CheckedMemoryModel.#instance) {
            CheckedMemoryModel.#instance = new CheckedMemoryModel();
        }

        return CheckedMemoryModel.#instance
    }

    set(id:number, checked: boolean) {
        return this;
    }

    get() {
        return this.#defaultMemory;
    }
}
const checkedMemoryModel = CheckedMemoryModel.instance;
export default checkedMemoryModel;


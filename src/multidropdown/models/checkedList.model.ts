import { UserCheckedObject } from "../common.types";

class CheckedListModel {
    static #instance:CheckedListModel;
    #checkedList:UserCheckedObject[] = [];

    private constructor() {}

    public static get instance():CheckedListModel {
        if(!CheckedListModel.#instance) {
            CheckedListModel.#instance = new CheckedListModel();
        }
        return CheckedListModel.#instance;
    }

    set(id:number, label: string, checked: boolean) {
        if (checked) {
            this.#checkedList.push({
                id,
                label
            })
        } else {
            this.#checkedList = this.#checkedList.filter(item => item.id !== id);
        }
    }

    get() {
        return this.#checkedList;
    }
}

const checkedListModel = CheckedListModel.instance;

export default checkedListModel;
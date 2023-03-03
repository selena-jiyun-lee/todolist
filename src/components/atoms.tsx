import { atom, selector } from 'recoil'
import { recoilPersist } from 'recoil-persist'

const { persistAtom } = recoilPersist({
  key: 'recoil-persist', // this key is using to store data in local storage
  storage: localStorage, // configurate which stroage will be used to store the data
})

export interface IToDo {
    text?: string;
    id: number;
    category: string;
}

export const categoriesState = atom<string[]>({
    key: "categories",
    default: ["TO_DO", "DOING", "DONE"],
    effects_UNSTABLE: [persistAtom]
})

export const categoryState = atom({
    key: "category",
    default: "TO_DO"
})

export const toDoState = atom <IToDo[]>({
    key: "toDo",
    default: [],
    effects_UNSTABLE: [persistAtom]
})

export const toDoSelector = selector({
    key: "toDoSelector",
    get: ({ get }) => {
        const toDos = get(toDoState);
        const category = get(categoryState);
        return toDos.filter(toDo => toDo.category === category);
    }
}) 
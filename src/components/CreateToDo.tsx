import { useForm } from "react-hook-form";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { categoryState, toDoState } from "./atoms";

interface IForm {
    toDo?: string
}

function CreateToDo() {
    const setToDos = useSetRecoilState(toDoState);
    const category = useRecoilValue(categoryState);
    const { register, handleSubmit, setValue } = useForm();
    const onSubmit = ({toDo}: IForm) => {
        setToDos((old) => [{text: toDo, id: Date.now(), category}, ...old])
        setValue("toDo", "");
    }
    return  <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("toDo", { required: "Please write to do."})} placeholder="Write a to do" />
            <button>Add</button>
        </form>;
}

export default CreateToDo;
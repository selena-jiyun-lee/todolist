import { useState } from 'react';

function ToDoList() {
    const [value, setValue] = useState("");
    const onChange = (event: React.FormEvent<HTMLInputElement>) => {
        const { currentTarget: { value } } = event;
        setValue(value);
    };
    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(value);
    }
    return <div>
        <form onSubmit={onSubmit}>
            <input onChange={onChange} value={value} placeholder="Write a to do" />
            <button>Add</button>
        </form>
    </div>
}

export default ToDoList;
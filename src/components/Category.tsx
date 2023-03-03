import { useRecoilState } from "recoil";
import { categoryState, categoriesState } from "./atoms";
import { useForm } from "react-hook-form";

import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: row;
`

const Select = styled.select`
    background-color: white;
    border: none;
    margin: 10px;
`

const Form = styled.form``;

const Input = styled.input`
    margin: 10px;
`

const Button = styled.button``;

type Inputs = {
  newCategory: string,
};

function Category() {
    const [category, setCategory] = useRecoilState(categoryState);
    const [categories, setCategories] = useRecoilState(categoriesState);
    const { register, handleSubmit, setValue } = useForm<Inputs>();
    const onInput = (event:React.FormEvent<HTMLSelectElement>) => {
        setCategory(event.currentTarget.value);
    }
    const onSubmit = ({ newCategory }: Inputs) => {
        setCategories((prev) => {
            if (prev.includes(newCategory)) {
                // Need to show error messag when existing category inserted
                return prev;
            } 
            return [...prev, newCategory];
        })
        setValue("newCategory", "")
    };
    return <Container>
        <Select value={category} onInput={onInput}>
            {categories.map(item => <option key={item} value={item}>{item.toUpperCase()}</option>)}
        </Select>
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Input placeholder="Add new category" {...register("newCategory")} />
            <Button>Add</Button>
        </Form>
        </Container>;
}

export default Category;
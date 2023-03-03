import { useRecoilValue, useRecoilState } from 'recoil';
import styled from 'styled-components';
import { toDoSelector } from './atoms';
import CreateToDo from './CreateToDo';
import ToDo from './ToDo';
import Category from './Category';

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
`;


function ToDoList() {
    const toDos = useRecoilValue(toDoSelector);
    
    return <Container>
        <Category />
        <CreateToDo />
        <ul>
            {toDos.map(toDo => (<ToDo key={toDo.id} {...toDo} />))}
        </ul>
    </Container>
}

export default ToDoList;
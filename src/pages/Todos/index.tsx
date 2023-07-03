import MainLayout from "../../Layouts/MainLayout.tsx";
import ToDoList from "./components/ToDoList.tsx";
import NewToDo from "./components/NewToDo.tsx";
import {ToDoListContext} from "../../store/ToDoContext.ts";
import {listOfTodos} from "../../store/data.ts";
import {useState} from "react";
const INIT_STATE = listOfTodos

const Index = () => {

    const [list, setList] = useState(INIT_STATE);

    return (
        <ToDoListContext.Provider value={{list, setList}} >
        <MainLayout>
            <h1>List of my TO DOS</h1>
            <NewToDo/>
            <ToDoList/>
        </MainLayout>
    </ToDoListContext.Provider>
    )
}

export default Index
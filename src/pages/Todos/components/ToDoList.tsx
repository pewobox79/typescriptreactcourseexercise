import ListItem from "./ListItem.tsx";
import {useContext} from "react";
import {ToDoListContext} from "../../../store/ToDoContext.ts";

export default function ToDoList(){

    const context = useContext(ToDoListContext);

    const myListOfTodos = context.list?.map((item)=>(
       <ListItem key={item.uuid +item.title} title={item.title} description={item.description} uuid={item.uuid}/>
    ));


    return  <>{myListOfTodos}</>

}
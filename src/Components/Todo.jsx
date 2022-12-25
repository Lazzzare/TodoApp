import React, { useState, useEffect } from "react";
import { v4 } from "uuid";
import TodoList from "./TodoList";
import TodoHeader from './TodoHeader';
import TodoInput from "./TodoInput";

const Todo = () => {
    // UseState
    const [value, setValue] = useState("");
    const [todos, setTodos] = useState([]);
    const [clockState, setClockState] = useState(null);
    const [date, setDate] = useState(null);


    // Input Logic
    const addTodo = () => {
        if (value === "") {
            alert("Please Enter Text");
            return;
        }
        const newTodo = {
            id: v4(),
            value: value,
            complited: false,
        };
        setTodos([...todos, newTodo]);
        setValue("");
    };


    // Delete todo
    const deleteTodo = (text) => {
        const newArray = todos.filter((todo) => {
            return todo !== text;
        });
        setTodos(newArray);
    };


    // Date logic (useEffect)

    useEffect(() => {
        setInterval(() => {
            const dateClock = new Date();
            setClockState(
                dateClock.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
            );
            const date = new Date();
            setDate(date.toLocaleDateString([], { month: "long", day: "2-digit" }));
        }, 1000);
    }, []);


    const completeTodo = (id) => {
        const updatedTodos = [...todos].filter((todo) => {
            if (todo.id === id) {
                todo.completed = !todo.completed
            }
            return todo
        })
        setTodos(updatedTodos);
    }


    return (
        <div className="w-[430px] min-h-[636px] rounded-xl bg-[#ffffff]">
            <TodoHeader date={date} clockState={clockState} />
            {/* Input */}
            <TodoInput
                value={value}
                setValue={setValue}
                addTodo={addTodo}
            />

            {/* Todo List */}
            <TodoList
                todos={todos}
                clockState={clockState}
                deleteTodo={deleteTodo}
                completeTodo={completeTodo}
            />
        </div>
    );
};

export default Todo;

import React from "react";
import { v4 } from "uuid";
import { RiDeleteBin6Line } from "react-icons/ri";
import { BsCircle } from "react-icons/bs";
import { AiOutlineCheck } from "react-icons/ai";

const TodoList = (props) => {
    return (
        <ul>
            {props.todos.map((todo) => {
                return (
                    <div key={v4()} className="flex justify-between px-[29px] mt-[36px]">
                        <div>
                            <li className="text-[#0D0D0D] text-[18px] font-medium leading-6">
                                {todo.value}
                            </li>
                            <p className="text-[14px] text-[#888888] font-normal">
                                {`Today at ${props.clockState}`}
                            </p>
                        </div>

                        <div className="flex gap-4 items-center justify-center">
                            {/* <BsCircle className="border-2 border-[#20EEB0] cursor-pointer text-white rounded-full p-2 w-[30px] h-[30px]" /> */}
                            {/* <AiOutlineCheck className="bg-[#20EEB0] cursor-pointer text-white rounded-full p-2 w-[30px] h-[30px]" /> */}

                            {/* <BsCircle
                                className={
                                    todo.completed
                                        ? "border-2 border-[#20EEB0] cursor-pointer text-white rounded-full p-2 w-[30px] h-[30px]"
                                        : "border-2 border-[#000000] cursor-pointer text-white rounded-full p-2 w-[30px] h-[30px]"
                                }
                                onClick={() => props.completeTodo(todo.id)}
                            /> */}

                            {!todo.completed ? <BsCircle className="border-2 border-[#20EEB0] cursor-pointer text-white rounded-full p-2 w-[30px] h-[30px]" onClick={() => props.completeTodo(todo.id)} />
                                :
                                <AiOutlineCheck onClick={() => props.completeTodo(todo.id)} className="bg-[#20EEB0] cursor-pointer text-white rounded-full p-2 w-[30px] h-[30px]" />
                            }

                            <RiDeleteBin6Line
                                onClick={() => props.deleteTodo(todo)}
                                className="text-[#FF4545] w-[25px] h-[25px] cursor-pointer"
                            />
                        </div>
                    </div>
                );
            })}
        </ul>
    );
};

export default TodoList;

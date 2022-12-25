import React from 'react'
import { AiOutlinePlus, AiOutlineCheck } from "react-icons/ai";

const TodoInput = (props) => {
    return (
        <div div className="flex justify-center gap-4 mt-6">
            <div className="relative">
                <input
                    type="text"
                    placeholder="Note"
                    value={props.value}
                    onChange={(e) => props.setValue(e.target.value)}
                    className="relative bg-[#e6e7e9] rounded pl-12 outline-none w-[275px] h-[49px]"
                />
                <AiOutlineCheck className="absolute top-0 bottom-0 left-2 bg-[#20EEB0] rounded-full text-white w-[30px] h-[30px] p-2 mt-2" />
            </div>
            <div className="w-[88px] h-[49px]">
                <AiOutlinePlus
                    onClick={props.addTodo}
                    className="bg-[#20EEB0] cursor-pointer text-[52px] px-4 py-1 text-white w-full rounded"
                />
            </div>
        </div>
    )
}

export default TodoInput
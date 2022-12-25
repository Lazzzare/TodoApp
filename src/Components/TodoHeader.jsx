import React from 'react'
import Image from "../Assets/Image.png";

const TodoHeader = (props) => {
    return (
        <div className="relative">
            <img src={Image} alt={Image} />
            {/* Date */}
            <div className="absolute right-2 bottom-4 flex flex-col items-end">
                <p className="text-white font-normal text-[20px] font-display">
                    {props.date}
                </p>
                <h1 className="font-display text-5xl text-white">{props.clockState}</h1>
            </div>
        </div>
    )
}

export default TodoHeader
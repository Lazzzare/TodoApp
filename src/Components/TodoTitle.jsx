import React from 'react'

const TodoTitle = (props) => {
    return (
        <div className='text-[96px] text-[#007FDB] font-bold hidden md:flex'>{props.title}</div>
    )
}

export default TodoTitle
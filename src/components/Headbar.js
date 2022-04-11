import React from 'react'
import { useState } from 'react';
import { GrHomeRounded } from 'react-icons/gr'
import {AiOutlineSearch} from 'react-icons/ai'




function Headbar() {
    const [filterText, setFilterText] = useState("");

    const handleClick = ((e) => setFilterText(e.target.value));
    

    return (
        <>
            <div className='flex justify-between h-10  bg-buttonColor'>
                <div className=' mt-1 flex justify-between'>
                    <a href='#/' className='mt-2 ml-12 h-6 '>
                        <GrHomeRounded />
                    </a>
                    <div className='mt-1'>
                        <input
                            className=' ml-4 rounded-lg bg-inputbg  text-white placeholder-placeholder placeholder-opacity-75 pl-3'
                            placeholder='Search'
                            value={filterText}
                            name="search"
                            onChange={handleClick}
                        />
                        <button className='bg-inputbg rounded-lg -m-4 pb-1'><AiOutlineSearch/></button>
                    </div>
                </div>
                <div className='mt-2 mr-10 ' >
                    <a
                        href='#/'
                        className=' p-1 pl-2 pr-2  text-blue-600 hover:text-white border-2 rounded-full bg-profileButton'>
                        u
                    </a>
                </div>

            </div>
        </>
    )
}

export default Headbar

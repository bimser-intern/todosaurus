import React from 'react'
import { useState } from 'react'
import { GiArcheryTarget } from 'react-icons/gi'
import { MdUpcoming } from 'react-icons/md'
import { MdToday } from 'react-icons/md'
import { GrFormAdd } from 'react-icons/gr'

function Categories() {

    const [categories, setCategory] = useState("");
    const [list, setList] = useState([]);

    return (
        <div className='border-r-2 border-borderGray bg-category h-full'>
            <div className='justify-start'>
                <div className='flex justify-start mt-5 ml-10 hover:bg-hoverEffect'>
                    <div>
                        <GiArcheryTarget className='mt-1 mr-2' />
                    </div>
                    <div>
                        <a className='m-0' href='#/'>
                            Duty
                        </a>
                    </div>
                </div>
                <div className='flex justify-start mt-5 ml-10 hover:bg-hoverEffect'>
                    <div>
                        <MdToday className='mt-1 mr-2' />
                    </div>
                    <div className='m-0'>
                        <a href='#/'>Today</a>
                    </div>
                </div>
                <div className='flex justify-start mt-5 ml-10 hover:bg-hoverEffect'>
                    <div>
                        <MdUpcoming className='mt-1 mr-2' />
                    </div>
                    <div className='m-0'>
                        <a href='#/'>Approaching</a>
                    </div>
                </div>
                
                <div className=' mt-5 mb-10'>Projects</div>
               
                <div className='m-4 mt-10'>
                    <input
                        className='bg-category'
                        value={categories}
                        placeholder='Create an Category'
                        onChange={(e) => setCategory(e.target.value)}
                    />
                    <button onClick={() => setList([...list, { id: Date.now(), categories: categories }], setCategory(""))}><GrFormAdd className='-m-1' /></button>
                </div>
                <div className='justify-start'>
                    {list.map((item, index) =>
                        <div className='mt-5 ml-12 text-left  hover:bg-hoverEffect w-22 '  key={index}>
                            <span className='w-3 h-3 rounded-full bg-borderGray text-borderGray'>.</span>
                            <a  className='ml-2' href='#/' >
                                {item.categories}
                            </a>
                        </div>)}
                </div>

            </div>

        </div>
    )
}

export default Categories
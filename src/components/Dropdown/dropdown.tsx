import React from 'react'

const Dropdown = () => {

    const data = [
        "Animals",
        "School",
        "Computer",
    ]

  return (
    <div className='absolute bg-white rounded-md w-36 h-fit shadow-lg top-[43px] z-[11]'>
        {/* <div className='hover:bg-black text-gray-500 cursor-pointer rounded-t-md'>Animals</div>
        <div className='hover:bg-black text-gray-500 cursor-pointer'>School</div>
        <div className='hover:bg-black text-gray-500 cursor-pointer rounded-b-md'>Computer</div> */}

        {data.map((item) => {
            return (
                <div 
                    key={item} 
                    className='hover:bg-black text-gray-500 cursor-pointer px-[8px] box-border py-[8px] 
                    first:rounded-t-md first:pt-[8px] 
                    last:rounded-b-md last:pb-[8px]
                    '
                >
                    {item}
                </div>
            )
        } )}
    </div>
  )
}

export default Dropdown;
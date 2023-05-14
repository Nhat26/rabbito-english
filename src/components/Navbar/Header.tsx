'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Dropdown from '../Dropdown/dropdown';
import Backdrop from '../Backdrop/Backdrop';

const Header = () => {
	const [hide, setHide] = useState(false);
	// useEffect(() => {
	//   console.log(hide);

	// }, [hide])

	return (
    <>
		<nav className="flex rows justify-between items-center p-4 bg-gradient-to-t from-[#A5D1E1] to-[#199FB1]">
			<div className="relative flex rows md:w-[46rem] md:h-8  h-6 dark:hidden items-center gap-[25px]">
				<Image src="/icons/GDD.svg" alt="Your SVG file" width={68} height={28} />

				<div>
					<ul className="flex items-center  gap-[50px]">
						<li className="hover:text-gray-500 cursor-pointer">For Organnizations</li>
						<li className="hover:text-gray-500 cursor-pointer">Our Course</li>
						<li className="hover:text-gray-500 cursor-pointer">
							<div onClick={() => setHide(!hide)}>For Kids</div>
							{hide === true &&
                <Dropdown />
              }
						</li>
						<li className="hover:text-gray-500 cursor-pointer">
							<div>Group lessons</div>
						</li>
					</ul>
				</div>
			</div>

			<div className="w-fit flex gap-[20px] rows">
				<button className="bg-[#0D5C75] text-white px-5 py-2 rounded-full hover:bg-[#A5D1E1]">
					Sign In
				</button>
				<button className="bg-[#0D5C75] text-white px-5 py-2 rounded-full hover:bg-[#A5D1E1]">
					Sign Up
				</button>
			</div>
		</nav>
              
      {hide && <Backdrop onClick={() => setHide(false)} />}
    </>
	);
};

export default Header;

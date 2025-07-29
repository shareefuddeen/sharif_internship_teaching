import React from "react";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="flex justify-center items-center gap-24 ">
			<div className="p-4">
				<NavLink to="/">
					<h1 className="text-2xl text-gray-900">Sharif</h1>
				</NavLink>
			</div>
			<ul className="flex justify-center items-center gap-6">
				<li>
					<NavLink
						to="/philosophy"
						className={({ isActive }) =>
							`hover:bg-[#928DAB] text-lg hover:text-gray-200 px-2 py-1 rounded-md transition duration-300 ${isActive ? "bg-[#928DAB] text-gray-200" : ""}`
						}
					>
						Teaching Philosophy
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/reflective"
						className={({ isActive }) =>
							`hover:bg-[#928DAB] text-lg hover:text-gray-200 px-2 py-1 rounded-md transition duration-300 ${isActive ? "bg-[#928DAB] text-gray-200" : ""}`
						}
					>
						Reflective Practice
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/cv"
						className={({ isActive }) =>
							`hover:bg-[#928DAB] text-lg hover:text-gray-200 px-2 py-1 rounded-md transition duration-300 ${isActive ? "bg-[#928DAB] text-gray-200" : ""}`
						}
					>
						Curriculum Vitae
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/tlm"
						className={({ isActive }) =>
							`hover:bg-[#928DAB] text-lg hover:text-gray-200 px-2 py-1 rounded-md transition duration-300 ${isActive ? "bg-[#928DAB] text-gray-200" : ""}`
						}
					>
						TLMs
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/exercise"
						className={({ isActive }) =>
							`hover:bg-[#928DAB] text-lg hover:text-gray-200 px-2 py-1 rounded-md transition duration-300 ${isActive ? "bg-[#928DAB] text-gray-200" : ""}`
						}
					>
						Exercises and Assignment
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/pictures"
						className={({ isActive }) =>
							`hover:bg-[#928DAB] text-lg hover:text-gray-200 px-2 py-1 rounded-md transition duration-300 ${isActive ? "bg-[#928DAB] text-gray-200" : ""}`
						}
					>
						Pictures and Videos
					</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;

import React from "react";
import { useState } from "react";

export const Reflective = ({ list }) => {
	const [isOpen, setIsopen] = useState(false);

	const fullList = isOpen ? list : list.slice(0, 1);
	return (
		<section className="font-serif min-h-screen bg-gray-200 border p-2 flex flex-col justify-center items-center">
			<div className="space-y-4 grid px-24 py-6 w-2/3 shadow-lg shadow-lg hover:shadow-2xl my-6 transition duration-300">
				<h1 className="text-center font-bold text-4xl mt-6">
					Reflective Practice
				</h1>
				{fullList.map((section, index) => (
					<div key={index} className=" rounded ">
						<h2 className="text-xl font-serif text-left font-bold mb-2">
							{section.title}
						</h2>
						{typeof section.body === "string" ? (
							<p className="font-sans">{section.body}</p>
						) : (
							<ul className="list-disc pl-6 space-y-1">
								{Object.values(section.body).map((point, i) => (
									<li className="font-sans" key={i}>
										{point}
									</li>
								))}
							</ul>
						)}
					</div>
				))}
				<button
					onClick={() => {
						setIsopen(!isOpen);
					}}
					className="mt-4 bg-gray-600 w-[5em] hover:scale-105 transition duration-300 text-white px-4 py-1 rounded-md"
				>
					{isOpen ? "Less" : "More"}
				</button>
			</div>
		</section>
	);
};

export default Reflective;

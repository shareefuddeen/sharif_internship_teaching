import React from "react";
import { useState } from "react";

export const Curriculum = ({ list }) => {
	const [isOpen, setIsopen] = useState(false);

	const fullList = isOpen ? list : [];
	return (
		<section className="flex min-h-sceen flex-col justify-center items-center">
			<div className="w-2/3 shadow-lg shadow-lg hover:shadow-2xl my-6 transition duration-300 mt-[10em] px-[10em] w-2/3 ">
				<h1 className="text-center font-bold text-4xl my-6">
					Curriculum Vitae
				</h1>
				<h1 className="font-bold text-xl my-6">PERSONAL DETAILS</h1>
				<div className="flex gap-[12em]">
					<div>
						<p>Full Name:</p>
						<p>Date of Birth: </p>
						<p>Email Address:</p>
						<p>Mobile Numbers:</p>
						<p>Nationality:</p>
						<p>Sex: </p>
						<p>Languages: </p>
					</div>
					<div>
						<p>Awal Sharif</p>
						<p>September 1, 2003</p>
						<p>awalsharifpz18@gmail.com</p>
						<p>0593628367</p>
						<p>Ghanaian</p>
						<p>Male</p>
						<p>English and Twi</p>
					</div>
				</div>
				{fullList.map((section, index) => (
					<div key={index}>
						<h2 className="text-xl font-bold mb-2">
							{section.title}
						</h2>

						{/* Render based on data type */}
						{typeof section.body === "string" && (
							<p className="text-gray-700">{section.body}</p>
						)}

						{Array.isArray(section.body) && (
							<ul className="list-disc list-inside space-y-1">
								{section.body.map((item, i) => (
									<li key={i}>
										<strong>{item.L1}:</strong> {item.L2}
									</li>
								))}
							</ul>
						)}

						{section.title === "INTERESTS AND HOBBIES" &&
							Array.isArray(section.body) && (
								<ul className="list-disc list-inside">
									{section.body.map((hobby, i) => (
										<li key={i}>{hobby}</li>
									))}
								</ul>
							)}

						{section.title === "REFEREE" && (
							<div className="space-y-4 mt-2">
								{Object.entries(section.body).map(
									([key, refInfo], i) => (
										<div key={i}>
											<h3 className="font-semibold underline">
												{key}
											</h3>
											<p>{refInfo.L1}</p>
											<p>{refInfo.L2}</p>
											<p>{refInfo.L3}</p>
											<p>{refInfo.L4}</p>
										</div>
									),
								)}
							</div>
						)}
					</div>
				))}
				<button
					onClick={() => {
						setIsopen(!isOpen);
					}}
					className="my-4 bg-gray-600 w-[5em] hover:scale-105 transition duration-300 text-white px-4 py-1 rounded-md"
				>
					{isOpen ? "Less" : "More"}
				</button>
			</div>
		</section>
	);
};

export default Curriculum;

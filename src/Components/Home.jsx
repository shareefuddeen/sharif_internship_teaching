import React from "react";
import heroImage from "../Images/IMG-20230627-WA0070__2_-removebg-preview.png";

export const Home = () => {
	return (
		<section className="h-screen flex justify-center items-center">
			<div className=" m-24 p-12 flex-col shadow-lg hover:shadow-2xl transitio duration-300 rounded-md flex justify-center items-center gap-6">
				<img
					className="bg-gray-900 w-1/4 rounded-full"
					src={heroImage}
					alt="Hero image"
				/>

				<div>
					<h1 className="text-center font-serif text-gray-900 text-2xl font-bold">
						Hello, I am Awal Sharif
					</h1>
					<p className="text-center font-serif text-lg">
						I am an enthusiastic intern ICT teacher with a strong
						passion for technology and education. During my
						internship, I’ve focused on creating interactive and
						practical lessons that help students understand
						real-world applications of ICT. This experience has
						strengthened my teaching skills and deepened my
						commitment to making learning both engaging and
						meaningful.
					</p>
				</div>
			</div>
		</section>
	);
};

export default Home;

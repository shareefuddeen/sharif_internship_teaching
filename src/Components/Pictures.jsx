import React from "react";

export const Pictures = ({ images, heading }) => {
	return (
		<section>
			<h1 className="text-center font-bold text-4xl mt-20">{heading}</h1>
			<div className="grid grid-cols-3 grid-rows-3 gap-4 max-w-6xl mx-auto p-4">
				{images.map((img, index) => (
					<div
						key={index}
						className={`overflow-hidden rounded-2xl ${img.span}`}
					>
						<img
							src={img}
							alt={`img-${index}`}
							className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
						/>
					</div>
				))}
			</div>
		</section>
	);
};

export default Pictures;

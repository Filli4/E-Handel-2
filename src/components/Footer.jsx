import React from "react";

const Footer = () => {
	return (
		<footer className="flex flex-row w-full items-center justify-center h-12 bg-none fixed bottom-0">
			<div className="flex flex-col w-2/3 h-full px-10 items-center justify-center bg-gray-300 rounded-t-md gap-1">
				<div>
					<p className="text-xs font-light">Contact Support</p>
				</div>
				<div className="flex flex-row gap-20">
					<p className="text-xs font-extralight">+0359 7283 3392 09</p>
					<p className="text-xs font-extralight">ozell@noscam.cash</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;

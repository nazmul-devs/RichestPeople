import React from "react";
import "./Header.css";

const Header = () => {
	return (
		<div>
			<h2 className="header-title">
				As of 2021, there are reportedly 2,755 billionaires on Earth, with
				an estimated
				<span className="total-worth">
					total net worth of $13100000000000
				</span>
			</h2>
		</div>
	);
};

export default Header;

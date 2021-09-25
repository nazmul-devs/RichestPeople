import React from "react";
import "./Person.css";

const Person = (props) => {
	const { name, age, img, source, residence, worth } = props.person;
	return (
		<div className="person-card">
			<img src={img} alt="" />
			<h2>Name: {name}</h2>
			<h2>Age: {age}</h2>
			<h2>Residence: {residence}</h2>
			<h2>Worth source: {source}</h2>
			<h2>Net Worth: ${worth}</h2>
			<button
				className="details-btn"
				onClick={() => props.details(props.person)}
			>
				<i className="fas fa-search-dollar"></i> Details
			</button>
			<div className="contact">
				<i className="fas fa-address-card"></i>
				<i className="fas fa-paper-plane"></i>
				<i className="fab fa-google-plus-g"></i>
			</div>
		</div>
	);
};

export default Person;

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
		</div>
	);
};

export default Person;

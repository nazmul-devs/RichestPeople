import React, { useEffect, useState } from "react";
import "./Main.css";
import Cart from "../Cart/Cart";
import Person from "../Person/Person";

const Main = () => {
	const [persons, setPersons] = useState([]);
	const [person, setperson] = useState([]);
	useEffect(() => {
		fetch("./person.JSON")
			.then((res) => res.json())
			.then((data) => setPersons(data));
	}, []);

	// event handler for person details
	const handleDetails = (details) => {
		const currentPerosn = [...person, details];
		setperson(currentPerosn);
	};
	return (
		<div className="main">
			<div className="persons">
				<h2 className="main-title">The 10 Richest People in the World</h2>
				<div className="person-container">
					{persons.map((person) => (
						<Person
							key={person.id}
							person={person}
							details={handleDetails}
						/>
					))}
				</div>
			</div>
			<Cart persons={person} />
		</div>
	);
};

export default Main;

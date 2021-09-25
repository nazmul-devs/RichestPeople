import React, { useEffect, useState } from "react";
import "./Main.css";
import Cart from "../Cart/Cart";
import Person from "../Person/Person";

const Main = () => {
	const [persons, setPersons] = useState([]);
	useEffect(() => {
		fetch("./person.JSON")
			.then((res) => res.json())
			.then((data) => setPersons(data));
	}, []);
	const handleDetails = (details) => {
		console.log(details);
	};
	return (
		<div className="main">
			<div className="persons">
				<h2 className="main-title">The 10 Richest People in the World</h2>
				{persons.map((person) => (
					<Person
						key={person.id}
						person={person}
						details={handleDetails}
					/>
				))}
			</div>
			<Cart />
		</div>
	);
};

export default Main;

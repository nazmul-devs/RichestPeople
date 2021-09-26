import React from "react";
import "./Cart.css";

const Cart = (props) => {
	const { persons } = props;
	let totalAmount = 0;
	persons.filter((persn) => (totalAmount += Number(persn.worth)));
	return (
		<div className="person-cart">
			<h2>person details</h2>
			<h3>
				<i class="fas fa-users"></i> Person : {persons.length}{" "}
			</h3>
			<h3>Total amount : ${totalAmount}</h3>
			{persons.map((person) => (
				<div className="person-details">
					<img src={person.img} alt="" className="person-img" />
					<h4>{person.name}</h4>
				</div>
			))}
		</div>
	);
};

export default Cart;

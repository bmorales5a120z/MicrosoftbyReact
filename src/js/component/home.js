import React from "react";
import { Navbar } from "./navbar";
import { Card } from "./card";

//include images into your bundle
//something is wrong here
//import microsoft from "../../img/microsoft.jpg";

//create your first component
export function Home() {
	return (
		<>
			<Navbar />
			<div>
				<Card />
				<Card />
				<Card />
				<Card />
			</div>
		</>
	);
}

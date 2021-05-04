import React from "react";

import Light from "./light.jsx";

//create your first component
export function Home() {
	return (
		<div className="mainBox">
			<div className="row">
				<div className="bg-dark lightPost" />
			</div>
			<Light enabled={"Light redLight"} />
			<Light enabled={"Light yellowLight"} />
			<Light enabled={"Light greenLight"} />
		</div>
	);
}

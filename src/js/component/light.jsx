import React, { useState } from "react";
import PropTypes from "prop-types";

export default function Light(color) {
	//Declaracion de variables:
	const [light, stateChange] = useState(false); // (1)cambia el estado entre verdadero y falso
	let lightColor = ""; // (2)Determina el nombre de la className en CSS que cambiara el color cuando cambie el estado

	//condicional que hace el cambio del classname usando variable (2) y el estado de variable (1)

	if (light === true) {
		lightColor = color.enabled;
	} else {
		lightColor = "Light";
	}

	// Retorna el html de una luz que cambia de estado (true/false) al clickar en ella.

	return (
		<div className="row px-3 py-4 divisor">
			<div
				className={lightColor}
				onClick={() => {
					stateChange(!light);
				}}
			/>
		</div>
	);
}

Light.propTypes = {
	color: PropTypes.string
};

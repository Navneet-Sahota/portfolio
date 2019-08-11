import React from "react";

import CustomCard from "../CustomCard/CustomCard";

const SkillCard = props => {
	return (
		<CustomCard
			cardType="skill"
			name={props.name}
			image={props.image}
			description={props.description}
			height={100}
		/>
	);
};

export default SkillCard;

import React from "react";

import CustomCard from "../CustomCard/CustomCard";

const ProjectCard = props => {
	return (
		<CustomCard
			cardType="project"
			name={props.name}
			image={props.image}
			description={props.description}
			stack={props.stack}
			href={props.href}
			height={250}
		/>
	);
};

export default ProjectCard;

import React from "react";

import CustomCard from "../CustomCard/CustomCard";

const SkillCard = props => (
	<CustomCard cardType="skill" height={100} {...props} />
);

export default SkillCard;

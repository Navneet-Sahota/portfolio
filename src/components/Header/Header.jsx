import React from "react";
import Typography from "@material-ui/core/Typography";

import "./index.css";

const Header = props => (
	<Typography className="title" variant="h3">
		{props.title}
	</Typography>
);

export default Header;

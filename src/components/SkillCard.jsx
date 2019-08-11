import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import "./SkillCard.css";

const SkillCard = props => {
	return (
		<Card className="card">
			<CardMedia
				component="img"
				alt={props.name}
				height="100"
				image={props.image}
				title={props.name}
				className="card-image"
			/>
			<CardContent className="card-content">
				<Typography
					className="card-name"
					gutterBottom
					variant="h6"
					component="h3"
				>
					{props.name}
				</Typography>
				<Typography
					className="description"
					variant="body2"
					color="textSecondary"
					component="p"
				>
					{props.description}
				</Typography>
			</CardContent>
		</Card>
	);
};

export default SkillCard;

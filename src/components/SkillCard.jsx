import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const styles = makeStyles({
	card: {
		maxWidth: 200,
		marginBottom: "5vh",
	},
});

function SkillCard() {
	const classes = styles();
	return (
		<Card className={classes.card} onClick={() => console.log("react")}>
			<CardMedia
				component="img"
				alt="React"
				height="100"
				image="https://reactjs.org/logo-og.png"
				title="React"
			/>
			<CardContent style={{ padding: "16px" }}>
				<Typography gutterBottom variant="h6" component="h3">
					React
				</Typography>
				<Typography variant="body2" color="textSecondary" component="p">
					A JavaScript library for building user interfaces
				</Typography>
			</CardContent>
		</Card>
	);
	// }
}

export default SkillCard;

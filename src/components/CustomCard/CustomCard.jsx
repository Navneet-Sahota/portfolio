import React from "react";
import Card from "@material-ui/core/Card";
import Link from "@material-ui/core/Link";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import "./index.css";

const CustomCard = props => {
	return (
		<Card className={`card ${props.cardType}`}>
			<CardMedia
				component="img"
				alt={props.name}
				height={props.height}
				image={props.image}
				title={props.name}
				className="card-image"
			/>
			<CardContent className="card-content">
				<Typography
					className="card-name"
					gutterBottom
					variant="h5"
					component="h3"
				>
					<strong>
						{props.cardType !== "skill" ? (
							<Link href={props.href} target="_blank" rel="noreferrer">
								{props.name}
							</Link>
						) : (
							props.name
						)}
					</strong>
				</Typography>
				{props.cardType === "project" ? (
					<>
						<Typography
							className="stack"
							variant="body2"
							color="textSecondary"
							component="p"
						>
							<strong>{props.stack}</strong>
						</Typography>
					</>
				) : null}
				<Typography variant="body2" color="textSecondary" component="p">
					{props.description}
				</Typography>
			</CardContent>
		</Card>
	);
};

export default CustomCard;

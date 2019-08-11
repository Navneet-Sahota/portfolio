import React, { useState } from "react";
import Container from "@material-ui/core/Container";

import Experience from "./view/Experience/Experience";
import ContactMe from "./view/Contact/ContactMe";
import Skills from "./view/Skills/Skills";
import Projects from "./view/Projects/Projects";
import Blogs from "./view/Blogs/Blogs";
import home from "./assets/img/home.svg";
import MenuOption from "./components/MenuOption";
import "./App.css";

function App() {
	const [open, setOpen] = useState(false);
	const [display, setDisplay] = useState("home");

	const changeMenu = menu => {
		setDisplay(menu);
		setOpen(false);
	};

	const onMouseEnter = () => {
		if (!open) {
			setOpen(true);
		}
	};

	const onMouseExit = () => {
		if (open) {
			setOpen(false);
		}
	};

	return (
		<>
			<Container fixed>
				<div
					className="cn-home"
					id="cn-home"
					onMouseOver={() => {
						if (!open) {
							setOpen(true);
						}
					}}
				>
					{display !== "home" ? (
						<img
							src={home}
							alt="Home"
							style={{
								height: "33.3%",
								position: "relative",
								top: "17.5%",
								transform: "translateY(-17.5%)",
							}}
						/>
					) : null}
				</div>
				<div
					className={`cn-wrapper ${open ? "opened-nav" : ""}`}
					id="cn-wrapper"
				>
					<ul>
						<MenuOption
							id="blogs"
							name="Blogs"
							onClick={() => changeMenu("blogs")}
							onMouseOver={onMouseEnter}
							onMouseLeave={onMouseExit}
						/>
						<MenuOption
							id="skills"
							name="Skills"
							onClick={() => changeMenu("skills")}
							onMouseOver={onMouseEnter}
							onMouseLeave={onMouseExit}
						/>
						<MenuOption
							id="projects"
							name="Projects"
							onClick={() => changeMenu("projects")}
							onMouseOver={onMouseEnter}
							onMouseLeave={onMouseExit}
						/>
						<MenuOption
							id="experience"
							name="Experience"
							onClick={() => changeMenu("experience")}
							onMouseOver={onMouseEnter}
							onMouseLeave={onMouseExit}
						/>
						<MenuOption
							id="contact"
							name="Contact"
							onClick={() => changeMenu("contact")}
							onMouseOver={onMouseEnter}
							onMouseLeave={onMouseExit}
						/>
					</ul>
				</div>
				<div
					className={`cn-overlay ${open ? "on-overlay" : ""}`}
					id="cn-overlay"
				/>
				{display === "blogs" ? <Blogs /> : null}
				{display === "experience" ? <Experience /> : null}
				{display === "skills" ? <Skills /> : null}
				{display === "projects" ? <Projects /> : null}
				{display === "contact" ? <ContactMe /> : null}
			</Container>
		</>
	);
}

export default App;

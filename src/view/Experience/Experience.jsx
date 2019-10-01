import React from "react";

import Header from "../../components/Header/Header";
import "./index.css";
import WorkExTitle from "../../components/WorkExTitle/WorkExTitle";

const Experience = () => {
	return (
		<>
			<Header title="Experience" />
			<WorkExTitle
				jobTitle="Open Source Contributor at"
				company="Uber/deck.gl"
				href="https://deck.gl/"
				duration="Sep 2019 - Oct 2019"
			/>
			<ul className="work">
				<li>
					<span>
						Implemented{" "}
						<a
							className="blueBox"
							href="https://github.com/uber/deck.gl/pull/3609"
							target="_blank"
							rel="noopener noreferrer"
						>
							Integrate Quantile and Ordinal scaling
						</a>
						,{" "}
						<a
							className="blueBox"
							href="https://github.com/uber/deck.gl/pull/3677"
							target="_blank"
							rel="noopener noreferrer"
						>
							Fly to Transition auto support
						</a>{" "}
						and{" "}
						<a
							className="blueBox"
							href="https://github.com/uber/deck.gl/pull/3546"
							target="_blank"
							rel="noopener noreferrer"
						>
							Add support for quantile and ordinal scale
						</a>{" "}
						features.
					</span>
				</li>
				<li>
					<span>
						Implemented{" "}
						<span className="yellowBox">
							bug fixes, doc changes & enhancement.
						</span>{" "}
						View all contributions{" "}
						<a
							className="blueBox"
							href="https://github.com/uber/deck.gl/issues?utf8=%E2%9C%93&q=assignee%3ANavneet-Sahota+"
							target="_blank"
							rel="noopener noreferrer"
						>
							here
						</a>
						.
					</span>
				</li>
			</ul>
			<WorkExTitle
				company="Pesto Career Accelerator"
				href="https://www.pesto.tech"
				duration="Jul 2019 - Present"
			/>
			<ul className="work">
				<li>
					<span>
						Learned web development best practices and skills required for
						remote work.
					</span>
				</li>
				<li>
					<span>
						Built a{" "}
						<a
							className="blueBox"
							href="https://posto.netlify.com/"
							target="_blank"
							rel="noopener noreferrer"
						>
							markdown blogging application
						</a>
						.
					</span>
				</li>
			</ul>
			<WorkExTitle
				jobTitle="Frontend Lead at"
				company="Xane AI"
				href="https://xane.ai"
				duration="Jul 2018 - Jun 2019"
			/>
			<ul className="work">
				<li>
					<span>
						Wrote{" "}
						<span className="yellowBox">custom webpack configuration</span>{" "}
						which brought build size down by ~80%
					</span>
				</li>
				<li>
					<span>
						Made an MVP app to scan, detect & provide voice & text based
						information about different parts of a car for{" "}
						<strong className="yellowBox">
							Maruti Suzuki MAIL program (1st Runner-up).
						</strong>
					</span>
				</li>
				<li>
					<span>
						Made a{" "}
						<span className="yellowBox">custom Typeform-like interface</span> to
						conduct intra-department surveys in UK, US, PH & India.
					</span>
				</li>
				<li>
					<span>
						Made <span className="yellowBox">custom dashboard</span> to track
						each employee’s sentiment, find and resolve issues as early as
						possible.
					</span>
				</li>
				<li>
					<span>
						<span className="yellowBox">
							Improved Company’s development environment
						</span>{" "}
						by setting up eslint, prettier, husky, and lint-staged.
					</span>
				</li>
				<li>
					<span>
						Build{" "}
						<span className="yellowBox">custom PPT Report generator.</span>
					</span>
				</li>
			</ul>
			<div style={{ height: "10vh" }}></div>
		</>
	);
};

export default Experience;

import React from "react";

import Header from "../../components/Header/Header";
import "./index.css";
import WorkExTitle from "../../components/WorkExTitle/WorkExTitle";

const Experience = () => {
	return (
		<>
			<Header title="Experience" />
			<div className="work-container even-work">
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
							Implemented bug fixes, doc changes & enhancement. View all
							contributions{" "}
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
			</div>
			<div className="work-container odd-work">
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
			</div>
			<div className="work-container even-work">
				<WorkExTitle
					jobTitle="Frontend Lead at"
					company="Xane AI"
					href="https://xane.ai"
					duration="Jul 2018 - Jun 2019"
				/>
				<ul className="work">
					<li>
						<span>
							Wrote <strong>custom webpack configuration</strong> which brought
							down build size by ~70%
						</span>
					</li>
					<li>
						<span>
							Built an MVP app to scan, detect & provide voice & text based
							information about different parts of a car for{" "}
							<strong>Maruti Suzuki MAIL program (1st Runner-up).</strong>
						</span>
					</li>
					<li>
						<span>
							Built a <strong>custom Typeform-like interface</strong> to conduct
							intra-department surveys in UK, US, PH & India.
						</span>
					</li>
					<li>
						<span>
							Heavily contributed to <strong>custom dashboard</strong> to track
							each employee’s sentiment, find and resolve issues as early as
							possible.
						</span>
					</li>
					<li>
						<span>
							<strong>Improved Company’s development environment</strong> by
							setting up eslint, prettier, husky, and lint-staged.
						</span>
					</li>
					<li>
						<span>
							Built <strong>custom PPT Report generator.</strong>
						</span>
					</li>
				</ul>
			</div>
			<div style={{ height: "10vh" }}></div>
		</>
	);
};

export default Experience;

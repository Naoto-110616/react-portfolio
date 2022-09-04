import classes from "./ToolSet.module.css";
import SectionTItle from "../sectionTitle/SectionTitle";
import Item from "./item/Item";
import useSkill from "../../hooks/use-skill";
import { useCallback, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const ToolSet = () => {
	const frontSkill = document.querySelectorAll(".frontSkill");
	const backendSkill = document.querySelectorAll(".backendSkill");
	const toolSkill = document.querySelectorAll(".toolSkill");
	const frontSkills = useSkill(
		"https://portfolio-page-react-default-rtdb.firebaseio.com/skills/frontSkills.json"
	);
	const backendSkills = useSkill(
		"https://portfolio-page-react-default-rtdb.firebaseio.com/skills/backendSkills.json"
	);
	const toolSkills = useSkill(
		"https://portfolio-page-react-default-rtdb.firebaseio.com/skills/ToolSkills.json"
	);

	const TLHEADER = gsap.timeline();

	const setAnimation = useCallback(() => {
		TLHEADER.from(".frontTitle", {
			autoAlpha: 0,
			y: -50,
			duration: 0.4,
			stagger: 0.1,
			scrollTrigger: {
				trigger: ".frontSkillsWrapper",
				scrub: 0.5,
				start: "top 80%",
				end: "bottom 55%",
			},
		})
			.from(frontSkill, {
				autoAlpha: 0,
				y: -50,
				duration: 0.5,
				stagger: 0.1,
				scrollTrigger: {
					trigger: ".frontSkillsWrapper",
					scrub: 0.5,
					start: "top 80%",
					end: "bottom 55%",
				},
			})
			.from(".backendTitle", {
				autoAlpha: 0,
				y: -50,
				duration: 0.4,
				stagger: 0.1,
				scrollTrigger: {
					trigger: ".backendSkillsWrapper",
					scrub: 0.5,
					start: "top 80%",
					end: "bottom 55%",
				},
			})
			.from(backendSkill, {
				autoAlpha: 0,
				y: -50,
				duration: 0.5,
				stagger: 0.1,
				scrollTrigger: {
					trigger: ".backendSkillsWrapper",
					scrub: 0.5,
					start: "top 80%",
					end: "bottom 55%",
				},
			})
			.from(".toolTitle", {
				autoAlpha: 0,
				y: -50,
				duration: 0.4,
				stagger: 0.1,
				scrollTrigger: {
					trigger: ".toolsSkillsWrapper",
					scrub: 0.5,
					start: "top 80%",
					end: "bottom 55%",
				},
			})
			.from(toolSkill, {
				autoAlpha: 0,
				y: -50,
				duration: 0.5,
				stagger: 0.1,
				scrollTrigger: {
					trigger: ".toolsSkillsWrapper",
					scrub: 0.5,
					start: "top 80%",
					end: "bottom 55%",
				},
			});
	});

	useEffect(() => {
		if (process.browser) {
			gsap.registerPlugin(ScrollTrigger);
			setAnimation();
		}
	}, [frontSkills, backendSkills, toolSkills, setAnimation]);

	return (
		<section id="toolSet" className={classes["toolSet-wrap"]}>
			<div className="sectionTitle">
				<SectionTItle title={"ToolSet"} />
			</div>
			<h3 className="frontTitle">Frontend</h3>
			<div className="frontSkillsWrapper">
				<div className={classes["toolSet-item"]}>
					{frontSkills.getSkills.map((frontSkill) => (
						<div className="frontSkill">
							<Item
								key={frontSkill.id}
								id={frontSkill.id}
								title={frontSkill.title}
								rate={frontSkill.rate}
								iconClassName={frontSkill.iconClassName}
							/>
						</div>
					))}
				</div>
			</div>
			<div className="backendTitle">
				<h3>Backend</h3>
			</div>
			<div className="backendSkillsWrapper">
				<div className={classes["toolSet-item"]}>
					{backendSkills.getSkills.map((backendSkill) => (
						<div className="backendSkill">
							<Item
								key={backendSkill.id}
								id={backendSkill.id}
								title={backendSkill.title}
								rate={backendSkill.rate}
								iconClassName={backendSkill.iconClassName}
							/>
						</div>
					))}
				</div>
			</div>
			<div className="toolTitle">
				<h3>Tools</h3>
			</div>
			<div className="toolsSkillsWrapper">
				<div className={classes["toolSet-item"]}>
					{toolSkills.getSkills.map((tool) => (
						<div className="toolSkill">
							<Item
								key={tool.id}
								id={tool.id}
								title={tool.title}
								rate={tool.rate}
								iconClassName={tool.iconClassName}
							/>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
export default ToolSet;

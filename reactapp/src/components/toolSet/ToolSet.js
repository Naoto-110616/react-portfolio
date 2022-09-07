import classes from "./ToolSet.module.css";
import SectionTItle from "../sectionTitle/SectionTitle";
import Item from "./item/Item";
import { useCallback, useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { frontSkills, backendSkills, toolSkills } from "../../common/skills";

const ToolSet = () => {
	const frontSkillRefs = useRef([]);
	const backendSkillRefs = useRef([]);
	const toolSkillRefs = useRef([]);

	const frontItems = frontSkills.map((frontSkill, i) => (
		<div
			ref={(element) => {
				frontSkillRefs.current[i] = element;
			}}
			key={`${frontSkill.id}`}
		>
			<Item
				id={frontSkill.id}
				title={frontSkill.title}
				rate={frontSkill.rate}
				icon={frontSkill.icon}
			/>
		</div>
	));
	const backItems = backendSkills.map((backendSkill, i) => (
		<div
			ref={(element) => {
				backendSkillRefs.current[i] = element;
			}}
			key={`${backendSkill.id}`}
		>
			<Item
				id={backendSkill.id}
				title={backendSkill.title}
				rate={backendSkill.rate}
				icon={backendSkill.icon}
			/>
		</div>
	));
	const tools = toolSkills.map((tool, i) => (
		<div
			ref={(element) => {
				toolSkillRefs.current[i] = element;
			}}
			key={`${tool.id}`}
		>
			<Item id={tool.id} title={tool.title} rate={tool.rate} icon={tool.icon} />
		</div>
	));

	const TLHEADER = gsap.timeline();

	const setAnimation = useCallback(() => {
		console.log(frontSkillRefs);
		TLHEADER.from(".frontTitle", {
			autoAlpha: 0,
			y: -60,
			duration: 0.5,
			stagger: 0.1,
			scrollTrigger: {
				trigger: ".frontTitle",
				scrub: 0.5,
				end: "center center",
			},
		})
			.from(frontSkillRefs.current, 1, {
				autoAlpha: 0,
				y: -60,
				duration: 0.5,
				stagger: 0.1,
				scrollTrigger: {
					trigger: ".frontSkillsWrapper",
					scrub: 0.5,
					end: "center center",
				},
			})
			.from(".backendTitle", {
				autoAlpha: 0,
				x: -60,
				duration: 0.4,
				stagger: 0.1,
				scrollTrigger: {
					trigger: ".backendTitle",
					scrub: 0.5,
					end: "center 65%",
				},
			})
			.from(backendSkillRefs.current, 1, {
				autoAlpha: 0,
				x: -60,
				duration: 0.5,
				stagger: 0.1,
				scrollTrigger: {
					trigger: ".backendSkillsWrapper",
					scrub: 0.5,
					end: "center 65%",
				},
			})
			.from(".toolTitle", {
				autoAlpha: 0,
				x: 50,
				duration: 0.4,
				stagger: 0.1,
				scrollTrigger: {
					trigger: ".toolTitle",
					scrub: 0.5,
					end: "center 65%",
				},
			})
			.from(toolSkillRefs.current, 1, {
				autoAlpha: 0,
				x: 50,
				duration: 0.5,
				stagger: 0.1,
				scrollTrigger: {
					trigger: ".toolsSkillsWrapper",
					scrub: 0.5,
					end: "center 65%",
				},
			});
	}, [TLHEADER, backendSkillRefs, frontSkillRefs, toolSkillRefs]);

	useEffect(() => {
		console.log.apply("hoge");
		if (process.browser) {
			gsap.registerPlugin(ScrollTrigger);
			setAnimation();
		}
	}, [setAnimation]);

	return (
		<section id="toolSet" className={classes["toolSet-wrap"]}>
			<SectionTItle title={"ToolSet"} />
			<h3 className="frontTitle">Frontend</h3>
			<div className="frontSkillsWrapper">
				<div className={classes["toolSet-item"]}>{frontItems}</div>
			</div>
			<h3 className="backendTitle">Backend</h3>
			<div className="backendSkillsWrapper">
				<div className={classes["toolSet-item"]}>{backItems}</div>
			</div>
			<h3 className="toolTitle">Tools</h3>
			<div className="toolsSkillsWrapper">
				<div className={classes["toolSet-item"]}>{tools}</div>
			</div>
		</section>
	);
};
export default ToolSet;

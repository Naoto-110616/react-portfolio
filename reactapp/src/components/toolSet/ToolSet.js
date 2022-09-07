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
		<div ref={frontSkillRefs[i]} key={`${frontSkill.id}`}>
			<Item
				id={frontSkill.id}
				title={frontSkill.title}
				rate={frontSkill.rate}
				icon={frontSkill.icon}
			/>
		</div>
	));
	const backItems = backendSkills.map((backendSkill, i) => (
		<div ref={backendSkillRefs[i]} key={`${backendSkill.id}`}>
			<Item
				id={backendSkill.id}
				title={backendSkill.title}
				rate={backendSkill.rate}
				icon={backendSkill.icon}
			/>
		</div>
	));
	const tools = toolSkills.map((tool, i) => (
		<div ref={toolSkillRefs[i]} key={`${tool.id}`}>
			<Item id={tool.id} title={tool.title} rate={tool.rate} icon={tool.icon} />
		</div>
	));

	const TLHEADER = gsap.timeline();

	const setAnimation = useCallback(() => {
		console.log(frontSkillRefs);
		TLHEADER.from(".frontTitle", {
			autoAlpha: 0,
			y: -50,
			duration: 0.5,
			stagger: 0.1,
			scrollTrigger: {
				trigger: ".frontTitle",
				scrub: 0.5,
			},
		})
			.from(frontSkillRefs.current, {
				autoAlpha: 0,
				y: -50,
				duration: 0.5,
				stagger: 0.1,
				scrollTrigger: {
					trigger: ".frontSkillsWrapper",
					scrub: 0.5,
				},
			})
			.from(".backendTitle", {
				autoAlpha: 0,
				x: -50,
				duration: 0.4,
				stagger: 0.1,
				scrollTrigger: {
					trigger: ".backendTitle",
					scrub: 0.5,
				},
			})
			.from(backendSkillRefs.current, {
				autoAlpha: 0,
				x: -50,
				duration: 0.5,
				stagger: 0.1,
				scrollTrigger: {
					trigger: ".backendSkillsWrapper",
					scrub: 0.5,
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
				},
			})
			.from(toolSkillRefs.current, {
				autoAlpha: 0,
				x: 50,
				duration: 0.5,
				stagger: 0.1,
				scrollTrigger: {
					trigger: ".toolsSkillsWrapper",
					scrub: 0.5,
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
				<div className={classes["toolSet-item"]}>
					{frontSkills.httpError && (
						<p className={classes.isError}>{frontSkills.httpError}</p>
					)}
					{!frontSkills.isLoading ? frontItems : "Loading..."}
				</div>
			</div>
			<div className="backendTitle">
				<h3>Backend</h3>
			</div>
			<div className="backendSkillsWrapper">
				<div className={classes["toolSet-item"]}>
					{backendSkills.httpError && (
						<p className={classes.isError}>{backendSkills.httpError}</p>
					)}
					{!backendSkills.isLoading ? backItems : "Loading..."}
				</div>
			</div>
			<div className="toolTitle">
				<h3>Tools</h3>
			</div>
			<div className="toolsSkillsWrapper">
				<div className={classes["toolSet-item"]}>
					{toolSkills.httpError && (
						<p className={classes.isError}>{toolSkills.httpError}</p>
					)}
					{!toolSkills.isLoading ? tools : "Loading..."}
				</div>
			</div>
		</section>
	);
};
export default ToolSet;

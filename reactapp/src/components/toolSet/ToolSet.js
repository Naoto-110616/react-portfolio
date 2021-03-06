import classes from "./ToolSet.module.css";
import SectionTItle from "../sectionTitle/SectionTitle";
import Item from "./item/Item";
import useSkill from "../../hooks/use-skill";

const ToolSet = () => {
	const frontSkills = useSkill(
		"https://portfolio-page-react-default-rtdb.firebaseio.com/skills/frontSkills.json"
	);
	const backendSkills = useSkill(
		"https://portfolio-page-react-default-rtdb.firebaseio.com/skills/backendSkills.json"
	);
	const toolSkills = useSkill(
		"https://portfolio-page-react-default-rtdb.firebaseio.com/skills/ToolSkills.json"
	);

	const frontItems = frontSkills.getSkills.map((frontSkill) => (
		<Item
			key={frontSkill.id}
			id={frontSkill.id}
			title={frontSkill.title}
			rate={frontSkill.rate}
			iconClassName={frontSkill.iconClassName}
		/>
	));
	const backItems = backendSkills.getSkills.map((backendSkill) => (
		<Item
			key={backendSkill.id}
			id={backendSkill.id}
			title={backendSkill.title}
			rate={backendSkill.rate}
			iconClassName={backendSkill.iconClassName}
		/>
	));
	const tools = toolSkills.getSkills.map((tool) => (
		<Item
			key={tool.id}
			id={tool.id}
			title={tool.title}
			rate={tool.rate}
			iconClassName={tool.iconClassName}
		/>
	));
	return (
		<section id="toolSet" className={classes["toolSet-wrap"]}>
			<SectionTItle title={"ToolSet"} />
			<h3>Frontend</h3>
			<div className={classes["toolSet-item"]}>
				{frontSkills.httpError && (
					<p className={classes.isError}>{frontSkills.httpError}</p>
				)}
				{!frontSkills.isLoading ? frontItems : "Loading..."}
			</div>
			<h3>Backend</h3>
			<div className={classes["toolSet-item"]}>
				{backendSkills.httpError && (
					<p className={classes.isError}>{backendSkills.httpError}</p>
				)}
				{!backendSkills.isLoading ? backItems : "Loading..."}
			</div>
			<h3>Tools</h3>
			<div className={classes["toolSet-item"]}>
				{toolSkills.httpError && (
					<p className={classes.isError}>{toolSkills.httpError}</p>
				)}
				{!toolSkills.isLoading ? tools : "Loading..."}
			</div>
		</section>
	);
};
export default ToolSet;

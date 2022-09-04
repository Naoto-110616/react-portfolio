import gsap from "gsap";
import { useCallback, useEffect } from "react";
import SectionTitle from "../sectionTitle/SectionTitle";
import classes from "./Welcome.module.css";

const Welcome = () => {
	const setAnimation = useCallback(() => {
		gsap.to(".sectionTitle", {
			scale: 10,
			repeat: -1,
			duration: 2,
			yoyo: true,
		});
	}, []);

	useEffect(() => {
		setAnimation();
	}, [setAnimation]);

	return (
		<div className={classes.section}>
			<SectionTitle className="sectionTitle" title={"Welcome"} />
			<p className={classes.message}>
				Thank you for visiting my portfolio page!
			</p>
			<p className={classes.message}>
				I have 1 years experience in Web Development mainly as a frontend
				Engineer!
			</p>
		</div>
	);
};

export default Welcome;

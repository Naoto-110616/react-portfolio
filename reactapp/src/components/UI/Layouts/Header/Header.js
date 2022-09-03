import classes from "./Header.module.css";
import HeaderNav from "./headerNav/HeaderNav";
import Icons from "./icons/Icons";
import AnchorLink from "react-anchor-link-smooth-scroll";
import MediaQuery from "react-responsive";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Header = () => {
	useEffect(() => {
		if (process.browser) {
			gsap.registerPlugin(ScrollTrigger);
			setAnimation();
		}
	}, []);

	const TLHEADER = gsap.timeline({
		defaults: {
			duration: 0.5,
			ease: "bounce.out",
		},
	});

	const setAnimation = () => {
		TLHEADER.from("header", {
			y: -50,
		})
			.from(
				"h1",
				{
					y: -100,
				},
				"-=0.1"
			)
			.from(
				"nav",
				{
					y: -100,
				},
				"<"
			);
	};

	return (
		<header className={classes.header}>
			<AnchorLink href="#root">
				<h1>Portfolio</h1>
			</AnchorLink>
			<div className="nav">
				<div className={classes["header-item"]}>
					<Icons />
					<MediaQuery query="(min-width: 768px)">
						<HeaderNav />
					</MediaQuery>
				</div>
			</div>
		</header>
	);
};

export default Header;

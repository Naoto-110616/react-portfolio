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
			duration: 0.7,
			ease: "power4.out",
		},
	});

	const setAnimation = () => {
		TLHEADER.from("header", {
			y: -100,
			autoAlpha: 0,
		})
			.from(
				"h1",
				{
					y: -70,
					autoAlpha: 0,
					ease: "bounce.out",
				},
				"-=0.1"
			)
			.from(
				"nav",
				{
					y: -70,
					autoAlpha: 0,
					ease: "bounce.out",
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

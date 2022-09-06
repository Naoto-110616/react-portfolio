import classes from "./Header.module.css";
import HeaderNav from "./headerNav/HeaderNav";
import Icons from "./icons/Icons";
import AnchorLink from "react-anchor-link-smooth-scroll";
import MediaQuery from "react-responsive";
import { useCallback, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Header = () => {
	const headerRef = useRef();
	const h1Ref = useRef();
	const navRef = useRef();
	const TLHEADER = gsap.timeline({
		defaults: {
			duration: 0.7,
			ease: "power4.out",
		},
	});

	const setAnimation = useCallback(() => {
		TLHEADER.from(headerRef.current, {
			y: -100,
			autoAlpha: 0,
		})
			.from(
				h1Ref.current,
				{
					y: -70,
					autoAlpha: 0,
					ease: "bounce.out",
				},
				"-=0.1"
			)
			.from(
				navRef.current,
				{
					y: -70,
					autoAlpha: 0,
					ease: "bounce.out",
				},
				"<"
			);
	}, [TLHEADER]);

	useEffect(() => {
		if (process.browser) {
			gsap.registerPlugin(ScrollTrigger);
			setAnimation();
		}
	}, [setAnimation]);

	return (
		<header ref={headerRef} className={classes.header}>
			<AnchorLink href="#root">
				<h1 ref={h1Ref}>Portfolio</h1>
			</AnchorLink>
			<div ref={navRef}>
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

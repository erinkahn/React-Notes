import React, { useState, useRef } from "react";
import useLockBodyScroll from "../hooks/useLockBodyScroll";

// lock body so you cant scroll when nav is open
// toggle hide and show class
// force focus (tab keys) to be inside the full page nav and not outside of it
// hide the nav when you press the esc key


const Navigation = () => {
	const [hidden, setHidden] = useState(true);
	const [locked, setLocked] = useLockBodyScroll();
	const btnRef = useRef();

	const toggle = () => {
		hidden ? setHidden(false) : setHidden(true);
		locked ? setLocked(false) : setLocked(true);
	};

	const handleFocus = (event) => {
		if (!event.currentTarget.contains(event.relatedTarget)) {
			btnRef.current.focus();
		}
	};

	const escapeModal = (event) => {
		if (event.key === "Escape") {
			setHidden(true);
			setLocked(true);
		}
	};

	return (
		<>
			<button
				className={`menuBtn ${hidden ? "" : "open"}`}
				aria-label={`${hidden ? "Open Navigation" : "Close Navigation"}`}
				onClick={toggle}
				ref={btnRef}
				tabIndex="0"
			>
				{hidden ? "Menu" : "Close"}
			</button>

			<div
				className={`fullPageMenu ${hidden ? "" : "appear"}`}
				aria-hidden={`${hidden ? "true" : "false"}`}
				role="dialog"
				aria-modal="true"
				aria-labelledby="full page menu"
				onKeyUp={escapeModal}
				onBlur={handleFocus}
			>
				<div className="nav-wrapper">
					<ul className="social">
						{navData.socialIcons.map((icon) => (
							<li
								className="icon-list-item"
								key={`icon-${icon.id}`}
							>
								<a
									className={`icon ${icon.siteName}`}
									target="_blank"
									rel="noreferrer"
									href={icon.url}
								>
									<span className="sr-only">
										{icon.siteName}
									</span>
								</a>
							</li>
						))}
					</ul>

					<p className="copyright">
						Copyright &copy; {today}. All rights reserved.
					</p>

					<nav>
						<ul className="nav-list">
							{navData.navigation.map((item) => (
								<li
									key={`nav-${item.id}`}
									className={`nav-item ${
										hidden ? "" : "open"
									}`}
								>
									<NavLink
										className="nav-link"
										to={item.linkTo}
									>
										{item.pageTitle}
										<span className="sr-only">Page</span>
									</NavLink>
								</li>
							))}
						</ul>
					</nav>
				</div>
			</div>
		</>
	);
};

export default Navigation;


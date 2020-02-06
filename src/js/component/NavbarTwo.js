import React from "react";
export function NavbarTwo() {
	return (
		<>
			<nav className="navbar navbar-expand-lg navbar-light bg-white">
				<div
					className="collapse navbar-collapse"
					id="navbarSupportedContent">
					<ul className="navbar-nav mr-auto">
						{/* Technologies drop down begins */}
						<li className="nav-item dropdown">
							<a
								className="nav-link dropdown-toggle"
								href="#"
								id="navbarDropdown"
								role="button"
								data-toggle="dropdown"
								aria-haspopup="true"
								aria-expanded="false">
								Technologies
							</a>
							<div
								className="dropdown-menu"
								aria-labelledby="navbarDropdown">
								<a className="dropdown-item" href="#">
									Dynamics CRM
								</a>
								<a className="dropdown-item" href="#">
									Office 365
								</a>
								<div className="dropdown-divider" />
								<a className="dropdown-item" href="#">
									Visual Studio 2020
								</a>
							</div>
						</li>
						{/* Documentation drop down begins here */}
						<li className="nav-item dropdown">
							<a
								className="nav-link dropdown-toggle"
								href="#"
								id="navbarDropdown"
								role="button"
								data-toggle="dropdown"
								aria-haspopup="true"
								aria-expanded="false">
								Documentation
							</a>
							<div
								className="dropdown-menu"
								aria-labelledby="navbarDropdown">
								<a className="dropdown-item" href="#">
									Documentation #1
								</a>
								<a className="dropdown-item" href="#">
									Documentation #2
								</a>
								<div className="dropdown-divider" />
								<a className="dropdown-item" href="#">
									Additional Documentation Resources
								</a>
							</div>
						</li>

						{/* Resources drop down begins here */}
						<li className="nav-item dropdown">
							<a
								className="nav-link dropdown-toggle"
								href="#"
								id="navbarDropdown"
								role="button"
								data-toggle="dropdown"
								aria-haspopup="true"
								aria-expanded="false">
								Resources
							</a>
							<div
								className="dropdown-menu"
								aria-labelledby="navbarDropdown">
								<a className="dropdown-item" href="#">
									Action
								</a>
								<a className="dropdown-item" href="#">
									Another action
								</a>
								<div className="dropdown-divider" />
								<a className="dropdown-item" href="#">
									Something else here
								</a>
							</div>
						</li>
					</ul>
					<form className="form-inline my-2 my-lg-0">
						<input
							className="form-control mr-sm-2"
							type="search"
							placeholder="Search"
							aria-label="Search"
						/>
						<button className="btn my-2 my-sm-0" type="submit">
							Sign in
						</button>
					</form>
				</div>
			</nav>
		</>
	);
}

import React from "react";
import { Navbar } from "./navbar";
import { Card } from "./card";

//include images into your bundle
import mscommunity from "../../img/mscommunity.jpg";
import visualstudio from "../../img/visualstudio2019.jpg";
import vsenterprise from "../../img/vsenterpise.png";
import code from "../../img/code.png";

//create your first component
export function Home(props) {
	return (
		<>
			<Navbar />
			<div className="text-center mt-5">
				<div className="d-flex justify-content-around">
					<Card
						imgUrl={mscommunity}
						title={"Visual Studio Community"}
						body={
							"Free, fully featured IDE for students, open-source and individual developers"
						}
					/>

					<Card
						imgUrl={visualstudio}
						title={"Visual Studio Professional"}
						body={
							"Professional developer tools, services, and subscription benefits for small teams "
						}
					/>
					<Card
						imgUrl={vsenterprise}
						title={"Visual Studio enterprise for Mac"}
						body={
							"End-to-end solution to meet demanding quality and scale needs of teams of all sizes "
						}
					/>
					<Card
						imgUrl={code}
						title={"Visual Studio Code"}
						body={
							"Code editing,redefined. Free, open source, and runs everywhere "
						}
					/>
				</div>
			</div>
		</>
	);
}

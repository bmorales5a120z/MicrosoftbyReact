import React from "react";
import PropTypes from "prop-types";

export function Card(props) {
	return (
		<>
			<div className="card" style={{ width: "300px" }}>
				<img
					className="card-img-top"
					src={props.imgUrl}
					alt="Card image cap"
				/>

				<div className="card-body">
					<h5 className="card-title">{props.title}</h5>
					<p className="card-text">{props.body}</p>
					<a href={props.imgUrl} className="btn btn-primary" />
				</div>
			</div>
		</>
	);
}

Card.propTypes = {
	imgUrl: PropTypes.string,
	title: PropTypes.string,
	body: PropTypes.string,
    link: PropTypes.string,
    buttonColor: PropTypes.string
};

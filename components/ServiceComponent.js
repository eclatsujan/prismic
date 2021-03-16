import React from "react";
import config from "../config/index";
import { Link, RichText, Date } from 'prismic-reactjs';
import { linkResolver } from '../prismic/client';
function ServiceComponent({ service:{title,description,image,skeleton_image,slugs}, index }) {
	
	let className=index % 2 == 0 ? "order-1" : "";
	className+="col-md-6 ";
	const target = {
		target: '_blank',
		rel: "noopener"
	};
	return (
		<>
			<div className="row d-flex align-items-center">
				<div className={className} style={{ position: "relative" }}>
					<img src={skeleton_image.url} />
            		<img src={image.url} style={{position:"absolute"}}/>
          		</div>
				<div className="col-md-6">
					<a href={Link.url(slugs, linkResolver)}>
						<h2>{RichText.asText(title)}</h2>
					</a>
					{RichText.render(description)}
				</div>
			</div>
		</>
	);
}

export default ServiceComponent;

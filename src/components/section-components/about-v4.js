import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class AboutV1 extends Component {

	render() {

		let publicUrl = process.env.PUBLIC_URL + '/'

		return <div className="ltn__about-us-area pt-120 pb-90 ">
			<div className="container">
				<div className="row">
					<div className="col-lg-6 align-self-center">
						<div className="about-us-img-wrap about-img-left">
							<img src={publicUrl + "assets/img/others/7.png"} alt="About Us Image" />
						</div>
					</div>
					<div className="col-lg-6 align-self-center">
						<div className="about-us-info-wrap">
							<div className="section-title-area ltn__section-title-2--- mb-20">
								<h6 className="section-subtitle section-subtitle-2 ltn__secondary-color">About Truck Message</h6>
								<h1 className="section-title">Revolutionize Your Lorry Logistics Experience with<span>TRUCK Message</span></h1>
								<p className='para'>Who We Are and What We Stand For</p>
							</div>
							<ul className="ltn__list-item-half clearfix">
								<li>
									<i className="flaticon-deal-1" />
									Ensuring efficiency and profitability for clients
								</li>
								<li>
									<i className="flaticon-expand" />
									Bridging gapsbetween truck owners, drivers, and service providers.
								</li>
								<li>
									<i className="flaticon-key-1" />
									Integrity, transparency, customer-centricity.
								</li>
								<li>
									<i className="flaticon-secure" />
									Experienced trucking and logistics professionals.
								</li>
							</ul> 
							<div className="btn-wrapper animated go-top">
								<Link to={process.env.REACT_APP_DYNAMIC_URI} className="theme-btn-1 btn btn-effect-1">OUR SERVICES</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	}
}

export default AboutV1
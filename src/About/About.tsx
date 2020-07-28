import React from 'react';
import './About.scss';

interface AboutProps {
}

const About: React.SFC<AboutProps> = () => {

	return (
		<section className='about-wrapper'>
			<img className='cheers-img' />
			<p className='about'>
			Spirited Quarantini was created by a team of four women who got tired of having the same boring cocktails every zoom happy hour. We wanted to help others learn how to bartend from the comfort of their own home. There are over 100 recipes to learn how to make delicious, beautiful, and refreshing alcoholic beverages with confidence. Happy mixing! 
			</p>
		</section>
	)
}

export default About;
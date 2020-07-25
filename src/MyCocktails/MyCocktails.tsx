import React, { useState, useEffect } from 'react';
import './MyCocktails.scss';

interface MyCocktailsProps {
}

const MyCocktails: React.SFC<MyCocktailsProps> = () => {
	const [allCocktails, setAllCocktails] = useState({})

	// NonFunctional code to connect array of cocktails
	// const displayingAllCocktails = async () => {
	// 	try {
	// 		const data: any = await getAllCocktails();
	// 		setAllCocktails(data)
	// 	} catch (error) {

	// 	}
	// }

	return (
		<section className='my-cocktails-container'>MY COCKTAILS PAGE</section>
	)
}

export default MyCocktails;
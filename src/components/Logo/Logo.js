import React from 'react';
import Tilt from 'react-parallax-tilt';
import brain from './brain.png';
import './Logo.css';


const Logo = () => {
	return (
		<div className = ' ma6 mt0'>
			<Tilt >
		      <div className = 'Tilt br3 shadow-2' style={{ height: '120px', width: '120px' }}>
		      <div className = 'Tilt-inner pa2'><img style = {{paddingTop: '5px'}} alt = 'logo' src = {brain}/> </div>
		      </div>
		    </Tilt>
		</div>
	);
}

export default Logo;
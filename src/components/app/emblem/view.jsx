import React from 'react';
import './style.scss';
import img from '../../../assets/img/emblem.png';

const View = React.memo(() => {
	return (
        <div>
			<img className={'emblem'} src={img} alt="Emblem"/>
		</div>
	);
});

export { View };
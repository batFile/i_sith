import React from 'react';
import { Emblem } from '../emblem';
import './style.scss';

const View = React.memo(() => {
	return (
        <div className={"header"}>
			<Emblem/>
		</div>
	);
});

export { View };
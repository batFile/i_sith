import React from 'react';
import { RoutesSwitch } from './../../../routes';
import '../../../assets/style/index.scss';

const View = React.memo(() => {
	return (
		<RoutesSwitch />
	);
});

export { View };
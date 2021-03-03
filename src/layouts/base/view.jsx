import React, { useMemo } from 'react';
import { Layout } from 'antd';
import { APP_NAME } from '../../constants/env';
import { Header } from '../../components';

const View = React.memo((props) => {
	const { children } = props;

	const currentYear = useMemo(() => new Date().getFullYear(), []);

	return (
		<Layout>
			<Layout.Header><Header/></Layout.Header>
			<Layout.Content>{children}</Layout.Content>
			<Layout.Footer>{currentYear} &copy; {APP_NAME}</Layout.Footer>
		</Layout>
	);
});

export { View };
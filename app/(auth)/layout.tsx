import { PropsWithChildren } from 'react';

const layout = ({ children }: PropsWithChildren) => {
	return <main className="auth">{children}</main>;
};

export default layout;

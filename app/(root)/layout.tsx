import MobileNav from '@/components/shared/mobile-nav';
import Sidebar from '@/components/shared/sidebar';
import { PropsWithChildren } from 'react';

const layout = ({ children }: PropsWithChildren) => {
	return (
		<main className="root">
			<Sidebar />
			<MobileNav />

			<div className="root-wrapper">
				<div className="wrapper">{children}</div>
			</div>
		</main>
	);
};

export default layout;

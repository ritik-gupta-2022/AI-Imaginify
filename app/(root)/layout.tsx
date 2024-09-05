import MobileNav from '@/components/shared/mobile-nav';
import Sidebar from '@/components/shared/sidebar';
import { Toaster } from '@/components/ui/toaster';
import { PropsWithChildren } from 'react';

const layout = ({ children }: PropsWithChildren) => {
	return (
		<div className="root">
			<Sidebar />
			<MobileNav />
			<div className="root-container">
				<main className="wrapper">{children}</main>
			</div>
			<Toaster />
		</div>
	);
};

 
export default layout;

import Link from 'next/link';
import style from '@/components/Navbar.module.css';
import ToggleNavbar from './ToggleNavbar';

const Navbar = () => {
	return (
		<div className="w-full h-24 flex items-center justify-between bg-pink-600 text-white">
			<div className="font-bold text-2xl font-mono hover:cursor-pointer px-5 sm:px-10">
				<Link href="/">Navbar</Link>
			</div>

			<div className={`px-10 ${style.textLinks}`}>
				<Link
					href="/"
					className="mx-6 text-xl font-bold font-mono hover:pointer"
				>
					Home
				</Link>
				<Link
					href="/about"
					className="mx-6 text-xl font-bold font-mono hover:pointer"
				>
					About
				</Link>
				<Link
					href="/products"
					className="mx-6 text-xl font-bold font-mono hover:pointer"
				>
					Products
				</Link>
				<Link
					href="/contact"
					className="mx-6 text-xl font-bold font-mono hover:pointer"
				>
					Contact
				</Link>
			</div>

			<div className={`sm:px-10 px-5 ${style.toggleNavbar}`}>
				<ToggleNavbar />
			</div>
		</div>
	);
};

export default Navbar;

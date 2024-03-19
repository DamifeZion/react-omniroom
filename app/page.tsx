import { cn } from "@/lib/utils";
import { OmniRoomProps } from "@/types";
import { useState, useEffect } from "react";



export const HeadRoom = ({ children, ...props }: OmniRoomProps) => {
	const [lastScrollTop, setLatScrollTop] = useState(0);
	const [isHidden, setIsHidden] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const scrollTop = window.scrollY;

			if (scrollTop < lastScrollTop) {
				setIsHidden(true);
			} else {
				setIsHidden(false);
			}

			setLatScrollTop(scrollTop);
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [lastScrollTop]);

	return (
		<div
			{...props}
			className={cn("fixed top-0 transition-top ease-linear duration-300", {
				"-top-20": isHidden,
			})}
		>
			{children}
		</div>
	);
};





// Nautical terminology, where ‘Port’ means Left
export const PortRoom = ({ children, ...props }: OmniRoomProps) => {
	const [lastScrollLeft, setLastScrollLeft] = useState(0);
	const [isHidden, setIsHidden] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const scrollLeft = window.scrollX;

			if (scrollLeft < lastScrollLeft) {
				setIsHidden(true);
			} else {
				setIsHidden(false);
			}

			setLastScrollLeft(scrollLeft);
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [lastScrollLeft]);

	return (
		<div
			{...props}
			className={cn("fixed left-0 transition-left ease-linear duration-300", {
				"-left-20": isHidden,
			})}
		>
			{children}
		</div>
	);
};






// Nautical terminology, where ‘Starboard’ means Right
export const StarboardRoom = ({ children, ...props }: OmniRoomProps) => {
	const [lastScrollRight, setLastScrollRight] = useState(0);
	const [isHidden, setIsHidden] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const scrollRight = window.scrollX;

			if (scrollRight > lastScrollRight) {
				setIsHidden(true);
			} else {
				setIsHidden(false);
			}

			setLastScrollRight(scrollRight);
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [lastScrollRight]);

	return (
		<div
			{...props}
			className={cn("fixed right-0 transition-right ease-linear duration-300", {
				"-right-20": isHidden,
			})}
		>
			{children}
		</div>
	);
};








export const FootRoom = ({ children, ...props }: OmniRoomProps) => {
	const [lastScrollTop, setLatScrollTop] = useState(0);
	const [isHidden, setIsHidden] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const scrollTop = window.scrollY;

			if (scrollTop > lastScrollTop) {
			setIsHidden(true);
			} else {
			setIsHidden(false);
			}

			setLatScrollTop(scrollTop);
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [lastScrollTop]);

	return (
		<div
			{...props}
			className={cn("fixed bottom-0 transition-bottom ease-linear duration-300", {
				"-bottom-20": isHidden,
			})}
		>
			{children}
		</div>
	);
};



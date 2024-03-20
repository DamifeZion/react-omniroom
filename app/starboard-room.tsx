import { cn } from "@/lib/utils";
import { OmniRoomProps } from "@/types";
import { useState, useEffect } from "react";




// Nautical terminology, where ‘Starboard’ means Right
const StarboardRoom = ({ children, hideDistance = "28", className, threshold = 100, hiddenClassNameStyle }: OmniRoomProps) => {
	const [lastScrollRight, setLastScrollRight] = useState(0);
	const [isHidden, setIsHidden] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const scrollRight = window.scrollX;

			if (scrollRight > threshold &&  lastScrollRight) {
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
	}, [lastScrollRight, threshold]);

	return (
		<div
			className={cn("fixed right-0 transition-right ease-linear duration-[400]", className, {
				[`-right-${hideDistance} ${hiddenClassNameStyle}`]: isHidden,
				'hiddenStarboardRoom': isHidden,
			})}
		>
			{children}
		</div>
	);
};



export default StarboardRoom
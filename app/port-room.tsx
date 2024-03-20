import { cn } from "@/lib/utils";
import { OmniRoomProps } from "@/types";
import { useState, useEffect } from "react";



// Nautical terminology, where ‘Port’ means Left
const PortRoom = ({ children, hideDistance = "28", className, threshold = 100, hiddenClassNameStyle }: OmniRoomProps) => {
	const [lastScrollLeft, setLastScrollLeft] = useState(0);
	const [isHidden, setIsHidden] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const scrollLeft = window.scrollX;

			if (scrollLeft < threshold &&  lastScrollLeft) {
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
	}, [lastScrollLeft, threshold]);

	return (
		<div
			className={cn("fixed left-0 transition-left ease-linear duration-[400]", className, {
				[`-left-${hideDistance} ${hiddenClassNameStyle}`]: isHidden,
				'hiddenPortRoom': isHidden,
			})}
		>
			{children}
		</div>
	);
};


export default PortRoom;
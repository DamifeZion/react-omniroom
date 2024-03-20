import { cn } from "@/lib/utils";
import { OmniRoomProps } from "@/types";
import { useState, useEffect } from "react";


const HeadRoom = ({ children, hideDistance = "28", className, threshold = 100 ,hiddenClassNameStyle }: OmniRoomProps) => {
	const [lastScrollTop, setLatScrollTop] = useState(0);
	const [isHidden, setIsHidden] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const scrollTop = window.scrollY;

			if (scrollTop < threshold && lastScrollTop) {
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
	}, [lastScrollTop, threshold]);

	return (
		<div
			className={cn("fixed top-0 transition-top ease-linear duration-[400]", className,  {
				[`-top-${hideDistance} ${hiddenClassNameStyle}`]: isHidden,
				'hiddenHeadRoom': isHidden,
			})}
		>
			{children}
		</div>
	);
};


export default HeadRoom;
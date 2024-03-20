import { cn } from "@/lib/utils";
import { OmniRoomProps } from "@/types";
import { useState, useEffect } from "react";




const FootRoom = ({ children, hideDistance = "28", threshold = 100, className, hiddenClassNameStyle }: OmniRoomProps) => {
	const [lastScrollTop, setLatScrollTop] = useState(0);
	const [isHidden, setIsHidden] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const scrollTop = window.scrollY;

			if (scrollTop > threshold &&  lastScrollTop) {
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
			className={cn("fixed bottom-0 transition-bottom ease-linear duration-[400]", className, {
				[`-bottom-${hideDistance} ${hiddenClassNameStyle}`]: isHidden,
				'hiddenFootRoom': isHidden,
			})}
		>
			{children}
		</div>
	);
};


export default FootRoom;
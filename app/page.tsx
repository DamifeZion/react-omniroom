import { cn } from "@/lib/utils";
import { BottomRoomProps } from "@/types";
import { useState, useEffect } from "react";

const BottomRoom = ({ children, ...props }: BottomRoomProps) => {
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

			console.log(
			scrollTop +
				"<<=== Scroll Top  | | |  Last Scroll Top:  ===>>" +
				lastScrollTop
			);
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

export default BottomRoom;

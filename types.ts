import { HTMLAttributes, ReactNode } from "react";

export interface OmniRoomProps extends HTMLAttributes<HTMLDivElement> {
   children: ReactNode;
   className?: string;
}

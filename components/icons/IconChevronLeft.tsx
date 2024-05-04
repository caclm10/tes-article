import type { SVGProps } from "react";

const IconChevronLeft = (props: SVGProps<SVGSVGElement>) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            {...props}
        >
            <path
                fill="currentColor"
                d="m14 18l-6-6l6-6l1.4 1.4l-4.6 4.6l4.6 4.6z"
            ></path>
        </svg>
    );
};

export default IconChevronLeft;

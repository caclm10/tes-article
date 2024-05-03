import { VariantProps, tv } from "tailwind-variants";

const actionTabVariants = tv({
    slots: {
        root: ["flex items-center gap-3 pb-4"],
        icon: [
            "inline-flex items-center justify-center border size-10 rounded-full",
        ],
    },
    variants: {
        isActive: {
            true: {
                root: ["text-primary border-b-2 border-primary"],
                icon: ["border-primary"],
            },
            false: {
                root: ["text-gray-solid"],
                icon: ["border-gray-solid"],
            },
        },
    },
    defaultVariants: {
        isActive: false,
    },
});

interface Props extends VariantProps<typeof actionTabVariants> {
    title: string;
    label: string;
}

const ActionTab: React.FC<Props> = ({ title, label, isActive }) => {
    const { root, icon: iconVariants } = actionTabVariants({ isActive });

    const icon = (
        <svg
            width={16}
            height={16}
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M14.7889 5.98897C14.7445 5.98683 14.7 5.98607 14.6556 5.98669H12.8004C11.2827 5.98669 9.98291 7.19123 9.98291 8.76224C9.98291 10.3333 11.2827 11.5378 12.8011 11.5378H14.6548C14.7013 11.5378 14.7462 11.5378 14.7881 11.5347C15.1014 11.5147 15.3967 11.3815 15.619 11.1599C15.8413 10.9383 15.9755 10.6434 15.9965 10.3302C15.9995 10.2853 15.9995 10.2373 15.9995 10.1931V7.33142C15.9995 7.28723 15.9995 7.23923 15.9965 7.19428C15.9755 6.8812 15.8415 6.58641 15.6193 6.36481C15.3972 6.14322 15.102 6.00992 14.7889 5.98974V5.98897ZM12.6381 9.50203C13.0289 9.50203 13.3466 9.17138 13.3466 8.76224C13.3466 8.35311 13.0289 8.02245 12.6381 8.02245C12.2472 8.02245 11.9303 8.35311 11.9303 8.76224C11.9303 9.17138 12.2465 9.50203 12.6381 9.50203Z"
                fill="#939393"
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M14.6552 12.6477C14.6807 12.6468 14.7061 12.6519 14.7293 12.6626C14.7525 12.6733 14.7728 12.6894 14.7887 12.7094C14.8045 12.7294 14.8155 12.7529 14.8206 12.7779C14.8257 12.8029 14.8249 12.8288 14.8182 12.8534C14.6704 13.3806 14.4365 13.8302 14.0609 14.2081C13.5116 14.7619 12.8145 15.008 11.9535 15.1246C11.117 15.2381 10.0488 15.2381 8.69875 15.2381H7.14679C5.79749 15.2381 4.72856 15.2381 3.89201 15.1246C3.03108 15.008 2.33395 14.7619 1.78463 14.2081C1.23531 13.6549 0.991506 12.9525 0.875699 12.0847C0.762939 11.2413 0.762939 10.164 0.762939 8.80399V8.72018C0.762939 7.36021 0.762939 6.28214 0.875699 5.43949C0.991506 4.5717 1.23531 3.87077 1.78387 3.31535C2.33319 2.76222 3.03032 2.51537 3.89125 2.39956C4.72856 2.28604 5.79749 2.28604 7.14679 2.28604H8.69875C10.0481 2.28604 11.117 2.28604 11.9535 2.39956C12.8145 2.51613 13.5116 2.76222 14.0609 3.31535C14.4365 3.69401 14.6704 4.14352 14.8182 4.67151C14.8248 4.69611 14.8255 4.7219 14.8203 4.74682C14.8151 4.77174 14.8041 4.79509 14.7883 4.81501C14.7724 4.83493 14.7521 4.85087 14.729 4.86154C14.7059 4.87221 14.6806 4.87732 14.6552 4.87646H12.8015C10.7185 4.87646 8.88313 6.53509 8.88313 8.76208C8.88313 10.9891 10.7193 12.6477 12.8023 12.6477H14.6552ZM3.5164 5.24673C3.44386 5.24703 3.37209 5.26162 3.30519 5.28965C3.23829 5.31769 3.17756 5.35863 3.12648 5.41013C3.0754 5.46164 3.03497 5.5227 3.00749 5.58983C2.98001 5.65696 2.96602 5.72885 2.96632 5.80139C2.96632 6.10843 3.21241 6.3568 3.5164 6.3568H6.45424C6.75899 6.3568 7.00508 6.10843 7.00508 5.80139C7.00548 5.65482 6.9477 5.51408 6.84442 5.41009C6.74114 5.30609 6.6008 5.24734 6.45424 5.24673H3.5164Z"
                fill="#939393"
            />
            <path
                d="M5.16455 1.54251L6.65633 0.443104C7.0456 0.155312 7.51695 0 8.00106 0C8.48517 0 8.95651 0.155312 9.34579 0.443104L10.8459 1.5486C10.2181 1.52422 9.51721 1.52422 8.74999 1.52422H7.0967C6.39424 1.52422 5.74892 1.52422 5.16455 1.54251Z"
                fill="#939393"
            />
            <circle cx={3.81017} cy={12.1906} r={3.80944} fill="white" />
            <path
                d="M3.81017 15.2381C5.48632 15.2381 6.85772 13.8667 6.85772 12.1906C6.85772 10.5144 5.48632 9.14302 3.81017 9.14302C2.13402 9.14302 0.762619 10.5144 0.762619 12.1906C0.762619 13.8667 2.13402 15.2381 3.81017 15.2381ZM3.81017 8.38113C5.90536 8.38113 7.6196 10.0954 7.6196 12.1906C7.6196 14.2858 5.90536 16 3.81017 16C1.71498 16 0.000732422 14.2858 0.000732422 12.1906C0.000732422 10.0954 1.71498 8.38113 3.81017 8.38113ZM4.00064 10.2859V12.5715H3.42922L2.47687 10.8954L2.97209 10.5906L3.42922 11.4287V10.2859H4.00064Z"
                fill="#939393"
            />
        </svg>
    );

    const activeIcon = (
        <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M14.7279 6.28841C14.6813 6.28617 14.6346 6.28537 14.5879 6.28601H12.64C11.0464 6.28601 9.68164 7.55078 9.68164 9.20033C9.68164 10.8499 11.0464 12.1146 12.6408 12.1146H14.5871C14.6359 12.1146 14.6831 12.1146 14.7271 12.1114C15.056 12.0904 15.3661 11.9506 15.5995 11.7179C15.833 11.4852 15.9738 11.1755 15.9959 10.8467C15.9991 10.7995 15.9991 10.7491 15.9991 10.7027V7.69797C15.9991 7.65157 15.9991 7.60118 15.9959 7.55398C15.9738 7.22524 15.8331 6.91572 15.5998 6.68304C15.3666 6.45037 15.0567 6.3104 14.7279 6.28921V6.28841ZM12.4696 9.97711C12.8799 9.97711 13.2135 9.62992 13.2135 9.20033C13.2135 8.77074 12.8799 8.42355 12.4696 8.42355C12.0592 8.42355 11.7264 8.77074 11.7264 9.20033C11.7264 9.62992 12.0584 9.97711 12.4696 9.97711Z"
                fill="#51B15C"
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M14.5875 13.28C14.6143 13.2791 14.641 13.2845 14.6653 13.2957C14.6896 13.307 14.711 13.3238 14.7277 13.3448C14.7443 13.3658 14.7558 13.3904 14.7612 13.4167C14.7666 13.443 14.7657 13.4702 14.7587 13.496C14.6035 14.0496 14.3579 14.5216 13.9635 14.9184C13.3867 15.5 12.6548 15.7584 11.7508 15.8808C10.8724 16 9.75085 16 8.33329 16H6.70374C5.28698 16 4.16461 16 3.28624 15.8808C2.38226 15.7584 1.65028 15.5 1.0735 14.9184C0.496718 14.3376 0.240725 13.6 0.119129 12.6889C0.000732422 11.8033 0.000732422 10.6721 0.000732422 9.24416V9.15616C0.000732422 7.7282 0.000732422 6.59624 0.119129 5.71146C0.240725 4.80029 0.496718 4.06431 1.0727 3.48113C1.64948 2.90035 2.38146 2.64115 3.28544 2.51956C4.16461 2.40036 5.28698 2.40036 6.70374 2.40036H8.33329C9.75005 2.40036 10.8724 2.40036 11.7508 2.51956C12.6548 2.64195 13.3867 2.90035 13.9635 3.48113C14.3579 3.87872 14.6035 4.3507 14.7587 4.90509C14.7656 4.93091 14.7663 4.95799 14.7609 4.98416C14.7554 5.01032 14.7439 5.03485 14.7273 5.05576C14.7106 5.07668 14.6893 5.09341 14.665 5.10461C14.6408 5.11582 14.6142 5.12118 14.5875 5.12028H12.6412C10.454 5.12028 8.52688 6.86183 8.52688 9.20016C8.52688 11.5385 10.4548 13.28 12.642 13.28H14.5875ZM2.89185 5.50907C2.81568 5.50938 2.74033 5.5247 2.67008 5.55413C2.59983 5.58357 2.53607 5.62656 2.48244 5.68064C2.42881 5.73472 2.38635 5.79883 2.35749 5.86932C2.32864 5.93981 2.31395 6.01529 2.31426 6.09145C2.31426 6.41384 2.57266 6.67464 2.89185 6.67464H5.97656C6.29655 6.67464 6.55494 6.41384 6.55494 6.09145C6.55537 5.93756 6.49469 5.78978 6.38625 5.68059C6.2778 5.57139 6.13045 5.5097 5.97656 5.50907H2.89185Z"
                fill="#51B15C"
            />
            <path
                d="M4.62256 1.61965L6.18891 0.465287C6.59765 0.163107 7.09256 3.05176e-05 7.60087 3.05176e-05C8.10918 3.05176e-05 8.60409 0.163107 9.01283 0.465287L10.588 1.62605C9.9288 1.60045 9.19282 1.60045 8.38725 1.60045H6.6513C5.91372 1.60045 5.23614 1.60045 4.62256 1.61965Z"
                fill="#51B15C"
            />
        </svg>
    );

    const iconComponent = isActive ? activeIcon : icon;
    return (
        <div className={root()}>
            <span className={iconVariants()}>{iconComponent}</span>

            <div>
                <p className="text-sm font-semibold">{title}</p>
                <p className="text-xs">{label}</p>
            </div>
        </div>
    );
};

export default ActionTab;

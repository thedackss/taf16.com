import type { HTMLAttributes, ReactNode } from "react";
import styles from "./Text.module.scss";

interface TextProps extends Omit<HTMLAttributes<HTMLDivElement>, "children"> {
    children: ReactNode;
    variant?: "h1" | "h2" | "h3" | "h4" | "body" | "body-sm" | "caption";
}

export function Text({ children, variant = "body", ...props }: TextProps) {
    const element = variant.startsWith("h") ? variant : "p";

    return (
        <>
            {element === "h1" && (
                <h1 className={`${styles.text} ${styles[variant]}`} {...props}>
                    {children}
                </h1>
            )}
            {element === "h2" && (
                <h2 className={`${styles.text} ${styles[variant]}`} {...props}>
                    {children}
                </h2>
            )}
            {element === "h3" && (
                <h3 className={`${styles.text} ${styles[variant]}`} {...props}>
                    {children}
                </h3>
            )}
            {element === "h4" && (
                <h4 className={`${styles.text} ${styles[variant]}`} {...props}>
                    {children}
                </h4>
            )}
            {element === "p" && (
                <p className={`${styles.text} ${styles[variant]}`} {...props}>
                    {children}
                </p>
            )}
        </>
    );
}

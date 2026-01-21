import { createFileRoute } from "@tanstack/react-router";
import useFirestore from "../hooks/firestore";
import { useEffect, useState } from "react";
import styles from "./index.module.scss";
import { Button } from "../components";

export const Route = createFileRoute("/")({
    component: RouteComponent,
});

function RouteComponent() {
    const { fetchButtons, fetchLinks } = useFirestore();

    const [buttons, setButtons] = useState<any[]>([]);
    const [links, setLinks] = useState<any[]>([]);

    useEffect(() => {
        async function loadButtons() {
            const buttons = await fetchButtons();
            setButtons(buttons);
        }

        async function loadLinks() {
            const links = await fetchLinks();
            setLinks(links);
        }

        loadLinks();
        loadButtons();
    }, []);

    function onClick() {
        const randomLink = links[Math.floor(Math.random() * links.length)];

        console.log(randomLink);

        if (randomLink) {
            window.open(randomLink.name, "_blank");
        } else {
            window.open("https://fbi.gov", "_blank");
        }
    }

    return (
        <>
            <div className={styles.container}>
                {buttons.map((button) => (
                    <Button
                        key={button.id}
                        variant="ghost"
                        size="lg"
                        onClick={onClick}
                    >
                        <img src={button.img_link} alt={button.name} />
                        {button.name}
                    </Button>
                ))}
            </div>
        </>
    );
}

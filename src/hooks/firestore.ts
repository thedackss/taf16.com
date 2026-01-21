import {
    collection,
    getDocs,
    getFirestore,
    query,
    QuerySnapshot,
    type DocumentData,
} from "@firebase/firestore";
import config from "../firebase/config";
import { useCallback } from "react";

function useFirestore() {
    const firestore = getFirestore(config);

    function transformSnapshot(
        querySnapshot: QuerySnapshot<DocumentData, DocumentData>,
    ) {
        const data: DocumentData[] = [];

        querySnapshot.forEach((doc) => {
            data.push({ id: doc.id, ...doc.data() });
        });

        return data;
    }

    const fetchData = useCallback(async (collectionName: string) => {
        const q = query(collection(firestore, collectionName));

        const querySnapshot = await getDocs(q);

        const data = transformSnapshot(querySnapshot);

        return data;
    }, []);

    const fetchButtons = useCallback(async () => {
        const buttons = await fetchData("buttons");

        return buttons;
    }, []);

    return { fetchData, fetchButtons };
}

export default useFirestore;

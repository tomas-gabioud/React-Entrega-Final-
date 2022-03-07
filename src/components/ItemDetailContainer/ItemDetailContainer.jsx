import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { getFirestore } from "../../Firebase/Firebase"
import { useParams } from "react-router-dom";

export default function ItemDetailContainer() {

    const [item, setItem] = useState({});
    const {itemDetailId} = useParams()

    useEffect(() => {
        const db = getFirestore();
        const itemCollection = db.collection("Item");
        const miItem = itemCollection.doc (itemDetailId);
        miItem.get()
            .then((doc) => {
                if (!doc.exists) {
                    return
                }
                setItem({ id: doc.id, ...doc.data()});
            })
            .catch((err) => {
            })
    }, [itemDetailId]) 
    return (
        <>
            <ItemDetail item={item} />
        </>
    );
} 
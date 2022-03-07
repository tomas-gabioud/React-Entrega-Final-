import React, { useState, useEffect } from "react";
import ItemList from "./ItemList"
import { getFirestore } from '../../Firebase/Firebase'
import { useParams } from "react-router-dom";

export default function ItemListContainer() {
    const [item, setItem] = useState({});
    const {ColeccionId} = useParams ();
    
    useEffect(() => {
        const db = getFirestore();
        const itemCollection = !ColeccionId ? db.collection("Item") : db.collection("Item").where("Coleccion", "==", ColeccionId)
        itemCollection.get()
            .then((querySnapShot) => {
                if (querySnapShot.size == 0) return
                setItem(querySnapShot.docs.map((doc) => {
                    return { id: doc.id, ...doc.data() }
                }
                ));
            })
            .catch((err) => {
            })
    }, [ColeccionId])
    return (
        <>
            {item.length && <ItemList item={item} />}
        </>
    );
}




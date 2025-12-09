import { useEffect, useState } from "react"
import { Link } from "react-router-dom"; 
import type { ReactNode } from "react";
import { useParams } from "react-router-dom";


export default function Uppskriftir() {
    const [page, usePage] = useState(1);
    return(
        

        <><div>Hér koma uppskriftir 🐒</div><div>sldkfjslkdjflask</div>
        <div className="next_btn">
            <button onClick={() => usePage(page-1)}>Fyrri uppskrift</button>
            <button onClick={() => usePage(page+1)}>Næsta uppskrift</button>
            </div></>
    )
}
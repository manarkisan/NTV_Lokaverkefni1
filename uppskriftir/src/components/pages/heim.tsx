import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import type { ReactNode } from "react";
import { useParams } from "react-router-dom";

export default function Heim() {
  return (
    <>
      
      <div id="heim-main">
        <img src="/kalikokur.png" alt="teiknuð mynd af kokki" title="þeta er han kali kokur"/>
        <p>Hó hó hó! <br />
        Velkomin á Vesen Restaurant veitingahús!</p>
      </div>
    </>
  );
}

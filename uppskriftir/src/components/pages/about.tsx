import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import type { ReactNode } from "react";
import { useParams } from "react-router-dom";

export default function About() {

  return (
    <>
      <div className="about_all">
        <img src={"/kalikokur.png"} width={300}/>
        <div id="about">
          <p>Vesen Restaurant</p>
          <p>Stofnað 20XX.</p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime
          quisquam a tempora, ipsum quasi ad doloribus laborum qui numquam
          consequatur, iusto, minus sapiente? Expedita repellendus nulla facere.
          Non, eum quibusdam? <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
          soluta eius? Eos repellendus optio nobis laborum aliquid iure deserunt
          cupiditate quos, eius cum necessitatibus ducimus? Excepturi molestiae
          porro fuga vel!
        </div>
      </div>
    </>
  );
}

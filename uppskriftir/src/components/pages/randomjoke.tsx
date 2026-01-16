import "../layout/layout.styles.css";
import { useEffect, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import type { ReactNode } from "react";
import { Children } from "react";
import type { Joke } from "../utils";

export default function randomJoke() {
  const [joke, setJoke] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchJoke = async () => {
      try {
        const response = await fetch("https://icanhazdadjoke.com/slack");
        const data = await response.json();
        setJoke(data.attachments[0].text);
      } catch {
        setError("Villa kom upp um djókið :(");
      } finally {
        setLoading(false);
      }
    };
    fetchJoke();
  }, []);

  //
  //     .then ((res) => res.json())
  //     .then((data) => setJoke(data));

  if (loading) return <p>Sæki djók...</p>;
  if (error) return <p>Villa: {error}</p>;
  return (
    <><h3 id="joke_title">Djók</h3>
      <div id="joke_cont">
        
        <p>{joke}</p>
        {error && <div>{error}</div>}
      </div>
    </>
  );
}

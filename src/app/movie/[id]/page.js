import React from "react";
import Image from "next/image";
import styles from "@/app/styles/common.module.css";

const page = async ({ params }) => {
  const id = params.id;

  const url = `https://netflix54.p.rapidapi.com/title/details/?ids=${id}&lang=en`;

  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "7b328586ddmshff84a4119adac6dp18d3e6jsn8380dc059305",
      "x-rapidapi-host": "netflix54.p.rapidapi.com",
    },
  };

  const res = await fetch(url, options);
  const data = await res.json();
  const main_data = data[0].details;

  return (
    <>
      <div className={styles.container}>
        <h2 className={styles.movie_title}>
          Netflix \ <span> {main_data.type} </span>
        </h2>
        <div className={styles.card_section}>
          <div>
            <Image
              src={main_data.backgroundImage.url}
              alt={main_data.title}
              width={600}
              height={300}
            />
          </div>
        </div>
        <div>
          <h2>{main_data.title}</h2>
          <p>{main_data.synopsis}</p>
        </div>
      </div>
    </>
  );
};

export default page;

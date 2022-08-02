import Image from "next/image";
import dogImg from "/public/img/dog.jpg";
import Link from "next/link";
import Head from "next/head";

export default function Artikel() {
  return (
    <div>
      <Head></Head>
      <Head>
        <title>Artikelübersicht</title>
        <meta name="keywords" content="next.js, react" />
      </Head>
      <h1>Artikel</h1>
      <Image
        src={dogImg}
        alt="image"
        height={400}
        width={400}
        // ! Blur Placeholder
        placeholder="blur"
        // ! Custom Blur Image
        blurDataUrl=""
        // ! true disables Lazy loading!!!
        priority="false"
      />
      {["1", "2", "3", "4", "5", "6"].map((path) => {
        return (
          <div key={path}>
            <Image
              src={`/img/${path}.jpg`}
              alt="image"
              height={400}
              width={400}
            />
          </div>
        );
      })}
    </div>
  );
}

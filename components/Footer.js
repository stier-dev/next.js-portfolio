import Link from "next/link";
import style from "@/styles/components/Footer.module.scss";
// import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import Image from "next/image";

export default function Footer() {
  return (
    <div className={style.footerContainer}>
      <ParallaxProvider>
        <div
          style={{
            position: "relative",
            width: "100vw",
            height: "600px",
            backgroundImage: "url('img/footer/galaxy.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div
            id="footerWater"
            style={{
              position: "absolute",
              top: "400px",
              left: "0px",
              width: "100vw",
              height: "300px",
            }}
          >
            <Image fill src="/img/footer/water.jpg" alt="" />
          </div>
        </div>

        <Parallax
          translateY={[-20, 20]}
          id="leftPolarBear"
          style={{
            position: "absolute",
            top: "360px",
            left: "0px",
            width: "500px",
            height: "300px",
          }}
        >
          <Image
            fill
            src={"/img/footer/left_polar_bear_comic_s.png"}
            alt="polar bear on iceblock"
          />
        </Parallax>
        <Parallax
          translateY={[-23, 22]}
          id="rightPolarBear"
          style={{
            position: "absolute",
            top: "380px",
            right: "10px",
            width: "360px",
            height: "300px",
          }}
        >
          <Image
            fill
            src={"/img/footer/right_polar_bear_comic_s.png"}
            alt="polar bear on iceblock"
          />
        </Parallax>
        <Parallax
          translateY={[-50, 50]}
          style={{
            position: "absolute",
            width: "100vw",
            height: "300px",
            top: "300px",
            margin: "0",
          }}
        >
          <div className={style.footerTextContainer}>
            <div className={style.linksContainer}>
              <Link href="/impressum">
                <h5 className={style.link}>Impressum</h5>
              </Link>
              <Link href="/datenschutz">
                <h5 className={style.link}>Datenschutz</h5>
              </Link>
            </div>
          </div>
        </Parallax>

        {/* <Parallax>
          <div className={style.galaxy}>
            <Image fill src={"/img/footer/galaxy.jpg"} alt="" />
          </div>
        </Parallax>

        <Parallax translateY={[-10, 10]}>
          <div className={style.water}>
            <Image fill src={"/img/footer/water.jpg"} alt="" />
          </div>
        </Parallax>
        <Parallax translateY={[-60, 60]}>
          <div className={style.textContent}>
            <div className={style.linksContainer}>
              <Link href="/impressum">
                <h5 className={style.link}>Impressum</h5>
              </Link>
              <Link href="/datenschutz">
                <h5 className={style.link}>Datenschutz</h5>
              </Link>
            </div>
          </div>
        </Parallax> */}
      </ParallaxProvider>
    </div>
  );
}

// export default function Footer() {
//   return (
//     <div className={style.footerContainer}>
//       <ParallaxProvider>
//         <Parallax>
//           <div className={style.galaxy}>
//             <Image fill src={"/img/footer/galaxy.jpg"} alt="" />
//           </div>
//         </Parallax>

//         <Parallax translateY={[-10, 10]}>
//           <div className={style.water}>
//             <Image fill src={"/img/footer/water.jpg"} alt="" />
//           </div>
//         </Parallax>
//         <Parallax translateY={[-60, 60]}>
//           <div className={style.textContent}>
//             <div className={style.linksContainer}>
//               <Link href="/impressum">
//                 <h5 className={style.link}>Impressum</h5>
//               </Link>
//               <Link href="/datenschutz">
//                 <h5 className={style.link}>Datenschutz</h5>
//               </Link>
//             </div>
//           </div>
//         </Parallax>
//       </ParallaxProvider>
//     </div>
//   );
// }

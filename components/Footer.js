import Link from "next/link";
import style from "@/styles/components/Footer.module.scss";
import Image from "next/image";

export default function Footer() {
  return (
    <div className={style.footerContainer}>
      <div className={style.galaxyClippingMask}>
        <div className={style.galaxyImg}>
          <Image
            src={"/img/footer/footer_galaxy_background2.jpg"}
            fill="contain"
            alt="Image of the Nightsky"
          />
        </div>
      </div>

      <div className={style.footerTextContainer}>
        <div className={style.logoContainer}>
          <div className={style.logo}>
            <Image
              fill
              src={"img/heroSection/georgi_hover.svg"}
              alt="whatsapp icon"
            />
          </div>
        </div>

        <div className={style.linksContainer}>
          <Link href="/#startseite">
            <h5 className={style.link}>Portfolio</h5>
          </Link>
          <Link href="/info/#start">
            <h5 className={style.link}>Über Mich</h5>
          </Link>
          <Link href="/kontakt/#start">
            <h5 className={style.link}>Kontakt</h5>
          </Link>
        </div>

        <div className={style.linksContainer}>
          <Link href="/impressum/#start">
            <h5 className={style.link}>Impressum</h5>
          </Link>
          <Link href="/datenschutz/#start">
            <h5 className={style.link}>Datenschutz</h5>
          </Link>
        </div>

        <div className={style.contactInfos}>
          <a href="tel:+491743917416" className={style.iconAndText}>
            <div className={`${style.image} ${style.tel}`}>
              <Image fill src={"/img/contact/phone.svg"} alt="telefon icon" />
            </div>
            <div className={style.image}>
              <Image
                fill
                src={"/img/contact/whatsapp.svg"}
                alt="whatsapp icon"
              />
            </div>
            <p className={style.contact}>0174 3917416</p>
          </a>

          <a href="mailto:info@stier.dev" className={style.iconAndText}>
            <div className={`${style.image} ${style.mail}`}>
              <Image fill src={"/img/contact/mail.svg"} alt="mail icon" />
            </div>
            <p className={style.contact}>info@stier.dev</p>
          </a>
        </div>
        <div className={style.copyrightContainer}>
          <p> Test Test Copyright &copy; 2023 </p>
        </div>
      </div>
    </div>
  );
}

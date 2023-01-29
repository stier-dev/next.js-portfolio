export default function Head({ title, keywords, description }) {
  return (
    <>
      <title>{title}</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <link rel="icon" href="./favicon.ico" />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
    </>
  );
}

Head.defaultProps = {
  title: "Georgi Stier | Portfolio",
  description: "Web-Development & Web-Design beispiele",
  keywords:
    "Web-Entwicklung, Web-Design, React, Next.js, Software Entwicklung, Georgi Stier",
};

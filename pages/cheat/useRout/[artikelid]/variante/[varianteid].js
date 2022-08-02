import { useRouter } from "next/router";

export default function ID() {
  const router = useRouter();
  const { artikelid, varianteid } = router.query;
  return (
    <div>
      <h1>
        meine Artikel ID lautet = {artikelid} und die Variante ist {varianteid}
      </h1>
    </div>
  );
}

import { useRouter } from "next/router";

export default function ID() {
  const router = useRouter();
  const { params = [] } = router.query;

  if (params.length === 2) {
    return (
      <div>
        <h1>
          {params[0]} + {params[1]}
        </h1>
      </div>
    );
  } else if (params.length === 1) {
    return (
      <div>
        <h1>{params[0]}</h1>
      </div>
    );
  }
}

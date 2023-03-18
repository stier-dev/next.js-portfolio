const defaultEndpoint = "https://rickandmortyapi.com/api/character";

export async function getServerSideProps() {
  const res = await fetch(defaultEndpoint);
  const data = await res.json();
  return {
    props: { data },
  };
}

// ! Type discription
// type Pictures = {
//   id: number,
//   name: string,
// };

const Giphy = ({ data }) => {
  const { results = [] } = data;
  console.log(results);

  return (
    <div>
      <h1>Yeeey</h1>
      {results.map((result) => {
        const { id, name } = result;
        return (
          <div key={id}>
            <h2>{name}</h2>
            <h2>{id}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default Giphy;

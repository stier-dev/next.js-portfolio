// ! SSR: Server Side Rendering
// * for websites with many changes on the server side (tiktok)

// * { users } will be importet from the getStaticProps() function
export default function Index({ users }) {
  return (
    <div>
      <h1>Benutzer</h1>
      <h2>{users.username}</h2>
    </div>
  );
}

// ! can export props for the component
export async function getServerSideProps(context) {
  const antwort = await fetch(
    `https://jsonplaceholder.typicode.com/users/${context.params.id}`
  );
  const users = await antwort.json();

  return {
    props: {
      users,
    },
  };
}

// ! creates paths (www.../benutzer/id)
export async function getServerSidePaths() {
  const antwort = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await antwort.json();
  const ids = users.map((user) => user.id);
  const paths = ids.map((id) => {
    return { params: { id: id.toString() } };
  });
  return {
    paths,
    // *make invalid ids lead to an 404 page!
    fallback: false,
  };
}

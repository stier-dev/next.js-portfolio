// ! ISR: incremental static regeneration
//* choose time to update the side! "revalidate: 300" (seconds)
// combination of ssr & ssg

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
export async function getStaticProps(context) {
  const antwort = await fetch(
    `https://jsonplaceholder.typicode.com/users/${context.params.id}`
  );
  const users = await antwort.json();

  return {
    props: {
      users,
    },
    // ! update every 300 sec
    revalidate: 300,
  };
}

// ! creates paths (www.../benutzer/id)
export async function getStaticPaths() {
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

// ! SSR: Server Side Rendering
// * for websites with many changes on the server side (tiktok)

// * { users } will be importet from the getStaticProps() function
export default function Index({ users }) {
  return (
    <div>
      <h1>Liste der Benutzer</h1>
      {users.map((user) => [<h2 key={user.username}>{user.username}</h2>])}
    </div>
  );
}

// ! can export props for the component
export async function getServerSideProps() {
  const antwort = await fetch(`https://jsonplaceholder.typicode.com/users/`);
  const users = await antwort.json();

  return {
    props: {
      users,
    },
  };
}

const fetchRepo = async () => {
  const request = await fetch(
    `https://api.github.com/users/mohlaroyivalijonova849/${name}`
  );
  const repos = await request.json();

  return repos;
};

async function Repo({ name }) {
  // const repo = await fetchRepo(name);
  return <div>Repo</div>;
}

export default Repo;

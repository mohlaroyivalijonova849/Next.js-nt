import Repo from "@/app/components/Repo";

function RepoPage({ params: { name } }) {
  return (
    <div>
      <Repo name={name} />
    </div>
  );
}

export default RepoPage;

import "./styles/Home.css";
import useFetch from "./useFetch";
import Filter from "./Filter";

function Home() {
  const { error, data, isLoaded } = useFetch("http://localhost:8000/blog");

  return (
    <div className="Home">
      {error && <div>{error}</div>}
      {isLoaded && <div>Loading...</div>}
      {data && (
        <div>
          All authors:
          <Filter blogs={data} />
        </div>
      )}
    </div>
  );
}
export default Home;

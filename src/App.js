import { useEffect, useState } from "react";
import { getPosts } from "./api/axios";
import SearchBar from "./SearchBar";
import ListPage from "./ListPage";

function App() {
  const [posts, setPosts] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  useEffect(() => {
    getPosts().then((json) => {
      setPosts(json);
      setSearchResults(json);
    });
  }, []);
  return (
    <>
      <SearchBar posts={posts} setSearchResults={setSearchResults} />
      <ListPage searchResults={searchResults} />
    </>
  );
}

export default App;

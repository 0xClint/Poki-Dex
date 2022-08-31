import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import Pagination from "../components/Pagination";
import { Pokiball, Search } from "../assests";
import Loader from "../assests/loader.gif";

const Home = () => {
  const [post, setPost] = useState([]);
  const [pageChange, setpagechange] = useState(false);
  const [query, setQuery] = useState("");
  const [Loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(24);

  useEffect(() => {
    const fetchData = async () => {
      // setLoading(true);

      const response = await axios.get(
        "https://pokeapi.co/api/v2/pokemon?limit=200&offset=0"
      );
      setPost(response.data.results);
      // setLoading(false);
    };
    fetchData();
  }, []);
  const filteredPost = post.filter((item) => {
    return item.name.includes(query);
  });
  // console.log(filteredPost);

  const handleChange = (e) => {
    setQuery(e.target.value);
    paginate(1);
    setpagechange(true);
  };

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstpost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPost.slice(indexOfFirstpost, indexOfLastPost);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // console.log(post);
  return (
    <div>
      {Loading ? (
        <div className="loader_container flex justify-center items-center h-[100vh]">
          <img src={Loader} alt="" srcSet="" className="h-20" />
        </div>
      ) : (
        <>
          <div className="heading flex justify-center mt-[3rem] mb-[1rem]">
            <img
              src={require("../assests/pokiball.png")}
              alt=""
              className="h-[7rem] mr-4 rotate-12 hover:scale-110 duration-150 trans"
            />
            {/* <Pokiball className="h-[7rem] block mt-[3rem] mb-[2rem]" /> */}
            <h2 className="text-[5rem] font-bold"> Poki Dex</h2>
          </div>
          <div className="input_container flex justify-center">
            <div className="category_dropdown flex cursor-pointer">
              <input
                type="text"
                placeholder="Search"
                onChange={(e) => handleChange(e)}
                className="rounded-2xl bg-white w-[40vw] font-semibold cursor-pointer focus:outline-none px-5 py-2.5 shadow-sm text-black my-3"
                value={query}
              />
              <Search className=" -translate-x-10 translate-y-6 scale-110" />
            </div>
          </div>
          <div className="card_container flex flex-wrap justify-center items-center my-[3rem] mx-[7rem] gap-[2rem]">
            {currentPosts.map((item) => {
              return (
                <div>
                  <Card data={item} />
                </div>
              );
            })}
          </div>
          <Pagination
            postsPerPage={postsPerPage}
            totalPosts={post.length}
            paginate={paginate}
          />
        </>
      )}
    </div>
  );
};

export default Home;

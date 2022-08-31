import React from "react";

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  // console.log(pageNumbers);
  return (
    <div>
      <ul className="pagination flex justify-center items-center">
        {pageNumbers.map((number) => {
          return (
            <li key={number} className="page_item mb-[5rem] mt-[1rem]">
              <a
                href="#"
                onClick={() => paginate(number)}
                className="page_link hover:scale-125 duration-100 font-semibold p-2 w-[30px] h-[30px] flex justify-center items-center bg-white rounded-md shadow-md m-2"
              >
                {number}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Pagination;

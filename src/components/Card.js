import axios from "axios";
import React, { useEffect, useState } from "react";

const Card = (data) => {
  const [img, setImg] = useState();
  const [type, setType] = useState();
  const [click, setClick] = useState(false);
  const temp = "Hello";

  // console.log(data.data.url);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(data.data.url);
      setImg(response.data.sprites.front_shiny);
      setType(response.data.types[0].type.name);
    };

    fetchData();
  }, [data]);

  console.log(type);

  return (
    <div
      className="card w-[13vw] h-[25vh] rounded-md flex justify-center items-center flex-col bg-white shadow-md p-[2rem] hover:scale-110 cursor-pointer duration-200"
      onClick={() => setClick(!click)}
    >
      <div className="container w-[100px] h-[100px] flex justify-center items-start">
        <div className="w-[100px] text-left">
          <img src={img} alt="" className="object-cover" />
        </div>
      </div>
      <p className="text-center font-semibold text-[1.2rem] ">
        {data.data.name}
      </p>
      {click && <p className="text-center">{type} type</p>}
    </div>
  );
};

export default Card;

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { VIDEO_SEARCH_API } from "../constant/constant";
import { toggleMenu } from "../utils/appSlice";
import { AiOutlineSearch } from "react-icons/ai";
import { cacheSuggestion } from "../utils/searchSlice";
import { BsSearch } from "react-icons/bs";
import { CgMenu } from "react-icons/cg";

const Header = () => {
  const [search, setSearch] = useState("");
  const [suggestion, setSuggestion] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);
  const dispatch = useDispatch();
  const { cache } = useSelector((state) => state);

  useEffect(() => {
    //debouncing
    const timer = setTimeout(() => {
      //caching
      if (cache[search]) suggestion(cache[search]);
      else getSuggestion();
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [search]);

  const getSuggestion = async () => {
    const datas = await fetch(VIDEO_SEARCH_API + search);
    const data = await datas.json();
    setSuggestion(data[1]);
    dispatch(cacheSuggestion({ [search]: data[1] }));
  };
  return (
    <div className="grid grid-cols-12 p-4 items-center">
      <div className="col-span-1 h-10" onClick={() => dispatch(toggleMenu())}><CgMenu size={30}/></div>
      <img
        alt="icon"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6F9Cyvi4uEYUfbsfNHod5E-rnv-RXhCIgEA&usqp=CAU"
        className="h-14"
      ></img>
      <div className="col-span-9 flex justify-center">
        <div className="flex">
          <div>
            <input
              type="text"
              className="border border-gray-300 h-10 rounded-l-full w-96 pl-5"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search"
              onFocus={() => setShowSuggestion(true)}
              onBlur={() => setShowSuggestion(false)}
            ></input>

            {/* suggestion box */}
            {showSuggestion && (
              <div className="flex flex-col w-96 bg-white absolute top-20 shadow-lg rounded-md items-center">
                {suggestion.map((e) => (
                  <div className="p-3 hover:bg-gray-200 flex">
                    <AiOutlineSearch />
                    {e}
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="border border-gray-300 h-10 px-5 pt-1 rounded-r-full flex items-center justify-center">
            <BsSearch size={20}/>
          </div>
        </div>
      </div>
      <img
        alt="profile"
        className="col-span-1 h-14"
        src="data:image/png;base64,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"
      ></img>
    </div>
  );
};

export default Header;

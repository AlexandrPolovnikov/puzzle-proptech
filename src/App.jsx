import axios from "axios";
import React, { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [fetching, setFetching] = useState(true);
  const [totalCount, setTotalCount] = useState(0);
  const [protoTime, setProtoTime] = useState(59);
  useEffect(() => {
    if (fetching) {
      axios
        .get(
          // `https://64149c74e8fe5a3f3a0b7a9d.mockapi.io/users?_limit=50&_page=${currentPage}`
          `http://localhost:3000/posts?_limit=50&_page=${currentPage}`
        )
        .then((response) => {
          setCount([...count, ...response.data]);
          setCurrentPage((prevState) => prevState + 1);
          setTotalCount(response.headers["x-total-count"]);
        })
        .finally(() => setFetching(false));
    }
  }, [fetching]);

  useEffect(() => {
    document.addEventListener("scroll", scrollHandler);

    return function () {
      document.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  const scrollHandler = (e) => {
    if (
      e.target.documentElement.scrollHeight -
        (e.target.documentElement.scrollTop + window.innerHeight) <
        100 &&
      count.length <= totalCount
    ) {
      setFetching(true);
    }
  };
  let time = 59;

  return (
    <div className="App">
      {count.map((item, index, i) => (
        <div className="window" key={index}>
          <div className="title">
            <img src={item.avatar} alt={count.title} />
            <span className="itemName">{item.name}</span>
            <span className="itemSpeed">
              Макс. скорость: {item.speed}
              <br></br>
              Штрафное время: {Math.random(1).toFixed(2)}мс.
            </span>
            <span className="itemTime">
              Время заезда:
              <br></br>
              00:{(time -= 0.025).toFixed(2)}
            </span>
            <span className="itemIndex">{index + 1}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;

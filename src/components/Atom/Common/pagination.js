import { useEffect, useState } from 'react';

const Pagination = ({ page = 0, maxpage = 5 }) => {

  const [count, setCount] = useState(page);

  const pr = document.querySelector(".paginate.left");
  const pl = document.querySelector(".paginate.right");

  const leftHandler = () => {
    setCount(count - 1)
  }

    const rightHandler = () => {
      setCount(count + 1)
  }

  useEffect(() => {
    console.log(pr, pl)
    if (pr && pl) {
      pr.setAttribute( 'data-state', count === 0 ? 'disabled' : '' );
      pl.setAttribute( 'data-state', count === maxpage - 1 ? 'disabled' : '' );  
    }
  },[count])

  return (
    <div className={"pagi-container"}>
      <div>
        <button className="paginate left" onClick={leftHandler}>
          <i></i>
          <i></i>
        </button>
          <div className="counter">{ `${count+1} / ${maxpage}`}</div> 
        <button className="paginate right" onClick={rightHandler}>
          <i></i>
          <i></i>
        </button>
      </div>
    </div>
  );
};

export default Pagination;

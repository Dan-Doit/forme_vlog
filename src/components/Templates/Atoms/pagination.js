import { useEffect, useState } from 'react';

const Pagination = ({ page = 0, maxpage = 5 }) => {

  const [count, setCount] = useState(page);

  const leftHandler = () => {
    if(count > 0) setCount(count - 1)
  }

  const rightHandler = () => {
      if(count < maxpage-1) setCount(count + 1)
  }

  useEffect(() => {
    const pr = document.querySelector(".paginate.left");
    const pl = document.querySelector(".paginate.right");

    if (pr && pl) {
      pr.setAttribute( 'data-state', count === 0 ? 'disabled' : '' );
      pl.setAttribute( 'data-state', count === maxpage - 1 ? 'disabled' : '' );  
    }
  },[count,maxpage])

  return (
    <div className={"pagi-container"}>
      <div>
        <button className="paginate left" data-state={'disabled'} onClick={leftHandler}>
          <i></i>
          <i></i>
        </button>
        </div>
          <div className="counter">{ `${count+1} / ${maxpage}`}</div> 
      <div>  
      <button className="paginate right" onClick={rightHandler}>
          <i></i>
          <i></i>
        </button>
      </div>
    </div>
  );
};

export default Pagination;

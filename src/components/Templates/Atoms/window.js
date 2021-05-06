export const Window = ({ header,children,footer:Footer }) => {

  return (
    <div className={"window"}>
      <div className={"win-header"}>
        <div className={"win-line"}> </div> 
        <span className={"win-span"}> {header} </span>
      </div>
      <div className={"win-container"}>
        { children }
      </div>
      <div className={"win-footer"}>
        { Footer }
      </div>
    </div>
  );
};

export default Window
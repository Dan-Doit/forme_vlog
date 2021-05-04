import Pagination from '../Atoms/pagination'

export const Window = ({ children, peopleInfo }) => {
  const maxpage = peopleInfo.length / 5;

  return (
    <div className={"window"}>
      <div className={"win-header"}>
        <div className={"win-line"}> </div> <span className={"win-span"}> MEDI INFO </span>
      </div>
      <div className={"win-container"}>{children} </div>
      <div className={"win-footer"}>
        <Pagination maxpage={maxpage} />
      </div>
    </div>
  );
};
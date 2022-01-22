import React from "react";
import RenderButtons from "./RenderButtons";

function Buttons(props) {
    const { votes, setVotes } = RenderButtons()
  return (
    <>
      <div className=" d-flex align-items-left mt-3 mb-3 ">
        <button
          type="button"
          className="btn btn-outline-primary position-relative me-3"
          //onClick={voteUpHandlerClick}
        >
          <i className="bi-hand-thumbs-up"></i>
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {props.buttons.rating}
            <span className="visually-hidden">unread messages</span>
          </span>
        </button>
        <button
          type="button"
          className="btn btn-outline-danger me-3"
          //onClick={voteUpHandlerClick}
        >
          <i className="bi-hand-thumbs-down"></i>
        </button>
        <button
          type="button"
          className="btn btn-outline-secondary "
          // onClick={handlerClick}
        >
          <i className="bi bi-trash"></i>
        </button>
      </div>
    </>
  );
}

export default Buttons;

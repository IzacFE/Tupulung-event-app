import React from "react";

export default function ButtonTest(props) {
  return (
    <>
      <div className="button1" onClick={props.click1}>
        Button1
      </div>
      <div className="button2" onClick={props.click2}>
        Button2
      </div>
      <div className="button3" onClick={props.click3}>
        Button3
      </div>
    </>
  );
}

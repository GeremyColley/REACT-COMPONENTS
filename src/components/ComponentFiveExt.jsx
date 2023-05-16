import { useRef, useEffect } from "react";

function ComponentFiveExt() {
  const myDiv = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!myDiv.current.contains(event.target)) {
        console.log("J'ai cliqué à l'extérieur de ma div rouge");
      }
    };

    const $ = document;
    $.addEventListener("click", handleClickOutside);

    return () => {
      $.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return <div className="my-div" ref={myDiv}><p>useRef</p></div>;
}

export default ComponentFiveExt;
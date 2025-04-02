import React, { useState } from "react";

const Home = (props) => {
  function changeHandler(event) {
    setText(event.target.value);
  }

  function toUpperCase() {
    const convert = text.toUpperCase();
    setText(convert);
  }

  function toLowerCase() {
    const convert = text.toLowerCase();
    setText(convert);
  }

  function clearText() {
    const convert = "";
    setText(convert);
  }

  function copyText() {
    navigator.clipboard
      .writeText(text)
    //   .then(() => alert("Text copied successfully!"))
    //   .catch((err) => console.error("Failed to copy text:", err));
  }

  const [text, setText] = useState("Jai Shree Ram");

  return (
    <div className="d-flex" style={{backgroundColor: props.mode === 'light'? 'gray': 'white',color: props.mode === 'light'? 'white': 'black'}}>
      <div className="container" >
        <h5>Write something To See And Get Some Changes</h5>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={changeHandler}
            style= {{backgroundColor: props.mode === 'light'? 'gray': 'white', color: props.mode === 'light'? 'white': 'black'}}
            id="mybox"
            rows="8"
          ></textarea>
        </div>
        <div className="btn">
          <button onClick={toUpperCase} className="btn btn-primary mx-1">
            ToUpperCase
          </button>
          <button onClick={toLowerCase} className="btn btn-primary mx-1">
            ToLowerCase
          </button>
          <button onClick={clearText} className="btn btn-primary mx-1">
            Clear Text
          </button>
          <button onClick={copyText} className="btn btn-primary mx-1">
            Copy Text
          </button>
        </div>
        <div>
            <h6>{text.split(" ").length} words and {text.length} characters</h6>
        </div>
        <div>
            <h2>Preview -: </h2>
            <p>{text.length>0?text: "Write Something To See Preview"}</p>
        </div>
      </div>
    </div>
  );
};

export default Home;

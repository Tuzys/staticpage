import "98.css";
import { useState } from "react";
import Draggable from "react-draggable";
import background from "./images/windowsxp.jpg";
import "./App.css";
import Files from "./Files.json";
//import useLocalStorage from "use-local-storage";
//https://www.npmjs.com/package/react-use-localstorage

const WindowView = ({ title, content }) => {
  return (
    <Draggable handle=".title-bar">
      <div className="window" style={{ width: "300px" }}>
        <div className="title-bar">
          <div className="title-bar-text">{title}</div>
          <div className="title-bar-controls">
            <button aria-label="Minimize"></button>
            <button aria-label="Maximize"></button>
            <button aria-label="Close"></button>
          </div>
        </div>
        <div className="window-body">
          <div>{content}</div>
        </div>
      </div>
    </Draggable>
  );
};
//console.log(Object.keys(Files));
//const FileSelect = ({ fileName }) => {
//  for (var i = 0; i in Object.entries(Files); i++) {
//    return <option>{Files}</option>;
//  }
//};
export default function App() {
  const [counter, setCounter] = useState(0);
  const [textCounter, setTextCounter] = useState(0);

  //increase counter
  const increase = () => {
    setCounter(count => count + 1);
  };

  //decrease counter
  const decrease = () => {
    setCounter(count => count - 1);
  };

  //reset counter
  const reset = () => {
    setCounter(0);
  };

  const onSubmit = e => {
    e.preventDefault();
  };

  return (
    <div
      className="App"
      style={{
        background: `url(${background})`,
        backgroundRepeat: "no-repeat",
        height: "100vh",
        width: "100vw",
        backgroundSize: "cover",
      }}
    >
      <WindowView
        title={"TEST"}
        content={"Testin kas WindowsView töötab. Vastus on jah B)."}
      ></WindowView>
      <WindowView
        title={"little counter"}
        content={
          <div className="counter">
            <h4>Liitmine ja lahutamine:</h4>
            <h4 className="counter__output">{counter}</h4>
            <div className="btn__container">
              <button className="control__btn" onClick={increase}>
                +
              </button>
              <button className="control__btn" onClick={decrease}>
                -
              </button>
              <button className="reset" onClick={reset}>
                Reset
              </button>
            </div>
          </div>
        }
      ></WindowView>
      <WindowView
        title={"Notepad"}
        content={
          <div>
            <input type="text" placeholder="File nimi"></input>
            <textarea
              placeholder="Lisa tekst"
              style={{ maxHeight: "250px", height: "150px", width: "250px", maxWidth: "250px" }}
            ></textarea>
            <br></br>
            <button type="submit">Save</button>
            <select style={{ width: "100px" }}>
              <option>Secrets.txt</option>
              <option>Tasks.txt</option>
              <option>LauraAsjad.txt</option>
            </select>
          </div>
        }
      ></WindowView>
      <WindowView
        title={"Teksti tähtedearvu lugeja"}
        content={
          <div>
            <p>Lihtsalt lisa tekst ja funktsioon loeb sinu eest arvukoguse ära</p>
            <form onSubmit={onSubmit}>
              <textarea
                onChange={e => setTextCounter(e.target.value.length)}
                style={{
                  maxWidth: "250px",
                  width: "250px",
                  minWidth: "250px",
                  height: "60px",
                  maxHeight: "60px",
                  minHeight: "60px",
                }}
              ></textarea>
              <br />
              <p>{textCounter}</p>
            </form>
          </div>
        }
      ></WindowView>
      <WindowView></WindowView>
    </div>
  );
}

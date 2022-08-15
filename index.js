const audios = [
  {
    text: "Q",
    src: "./sounds/drums/q.wav",
  },
  {
    text: "W",
    src: "./sounds/drums/w.wav",
  },
  {
    text: "E",
    src: "./sounds/drums/e.wav",
  },
  {
    text: "A",
    src: "./sounds/drums/a.wav",
  },
  {
    text: "S",
    src: "./sounds/drums/s.wav",
  },
  {
    text: "D",
    src: "./sounds/drums/d.wav",
  },
  {
    text: "Z",
    src: "./sounds/drums/z.wav",
  },
  {
    text: "X",
    src: "./sounds/drums/x.wav",
  },
  {
    text: "C",
    src: "./sounds/drums/c.wav",
  },
];

const textConext = React.createContext("");

function App() {
  const [audioText, setAudioText] = React.useState("");
  function DrumPad({ text, src, setAudioText }) {
    const audio = React.useRef(null);
    const play = () => {
      audio.current.currentTime = 0;
      audio.current.play();
      const parent = audio.current.parentNode.parentNode;
      parent.querySelector("h2").innerText = text + " is playing";
      audio.current.parentNode.style.backgroundColor = "yellow";
      setTimeout(() => {
        audio.current.parentNode.style.backgroundColor = "";
      }, 100);
    };
    function playAudio(e) {
      console.log(e.key);
      if (e.key === text) {
        play();
      }
    }

    React.useEffect(() => {
      document.addEventListener("keydown", playAudio);
      // return () => document.removeEventListener("keydown", playAudio);
    }, [playAudio]);

    const handleClick = () => {
      play();
    };

    return (
      <div
        className="drum-pad border border-secondary rounded"
        id={text}
        onClick={handleClick}
      >
        {text}
        <audio ref={audio} className="clip" id={text} src={src}></audio>
      </div>
    );
  }
  return (
    <div className="App text-center" id="drum-machine">
      <h1>Drum Machine</h1>

      <div id="display">
        <h2></h2>

        {audios.map((audio) => (
          <DrumPad
            text={audio.text}
            src={audio.src}
            setAudioText={setAudioText}
          />
        ))}
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

import './App.css';

function App() {

  const title = "Welcome to the blog";
  const likes = 50;
  // const person = {name: "yoshi", age: 30};
  const link = "https://www.youtube.com"

  return (
    <div className="App">
      <div className="content">
        <h1>{ title }</h1>
        <p>Liked { likes } times</p>

        {/* <p>{person}</p> */}

        <p>{ Math.random() * 10 }</p>
        <p>{"The number over are random"}</p>
        <p>{"This is a list of numbers:" + [1, 2, 3, 4, 5]}</p>
        <p>The numbers over are hard coded</p>

        <a href={ link }>Youtube Site</a>
      </div>
    </div>
  );
}

export default App;

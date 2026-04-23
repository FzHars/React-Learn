import "./HelloWorld.css";

export default function HelloWorld() {
  const props = {
    text: "Header Hello here",
  };
  return (
    <div className="">
      {/* <HeaderHelloWorld text="Hello there"/> */}
      <HeaderHelloWorld {...props} />
      <PHelloWorld />
    </div>
  );
}

function HeaderHelloWorld({ text = "Ups, smothing went worng" }) {
  //   const text = "Hello Worldd";
  return (
    // <h1 style={{color: "red",backgroundColor: "yellow",}}>{text.toUpperCase()}</h1>
    <h1 className="title">{text.toUpperCase()}</h1>
      
  );
}

function PHelloWorld() {
  const textP = "Selamat Belajar ReactJs";
//   const style = {
//     color: "white",
//     backgroundColor: "teal",
//   };
//   return <p style={style}>{textP.toLocaleLowerCase()}</p>;
  return <p className="content">{textP.toLocaleLowerCase()}</p>;
}

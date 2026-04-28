export default function SayHello() {
  function handleClick(e) {
    e.preventDefault();
    const name = document.getElementById("input_name").value;
    document.getElementById("text_hello").innerText = `Hello ${name}`;
  }
  return ( 
    <div className="">
      <form action="">
        <input type="text" id="input_name" />
        <button onClick={handleClick}>Say Hii..</button>
      </form>
      <h1 id="text_hello">Hmmm...</h1>
    </div>
  );
}

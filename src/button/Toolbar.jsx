export default function Toolbar({onClick}) {
  return (
    <div className="" onClick={onClick} style={{backgroundColor: "red"}}>
      <button onClick={onClick}>first</button>
      <button onClick={onClick}>second</button>
    </div>
  );
}

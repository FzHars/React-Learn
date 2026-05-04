export default function TaskList({items = []}) {
  return (
    <div>
      <h1>List Items</h1>
      <ul>
        {items.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

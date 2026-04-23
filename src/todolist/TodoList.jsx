import Todo from "./Todo.jsx";

export default function TodoList() {
  const dataList = [
    {
      id: 0,
      text: "Learn Javascript",
      isCompleted: true,
    },
    {
      id: 1,
      text: "Learn Laravel",
      isCompleted: true,
    },
    {
      id: 3,
      text: "Learn Tailwind",
      isCompleted: true,
    },
    {
      id: 4,
      text: "Learn ReactJs",
      isCompleted: false,
    },
    {
      id: 5,
      text: "Learn ReactJs Router ",
      isCompleted: false,
    },
  ];
  //   if create list in variabel
  //   const todos = dataList.map((todo) => <Todo key={todo.id} {...todo} />);
  return (
    // Manual rendering
    // <ul>
    //     <Todo isCompleted={true} text="Learn Javascript" isDeleted= {true}/>
    //     <Todo isCompleted={true} text="Learn Laravel"/>
    //     <Todo isCompleted={true} text="Learn Tailwind"/>
    //     <Todo isCompleted={false} text="Learn ReactJs"/>
    // </ul>
    // Dynamic rendering with collection component
    <ul>
      {dataList.map((todo) => (
        <Todo key={todo.id} {...todo} />
      ))}
    </ul>
  );
}

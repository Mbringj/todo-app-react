type IdemProps = {
  id: string;
  title: string;
}
function Item({ id, title }: IdemProps) {

  return (
    <li id={id} className="todo_item">
    <button className="todo_items_left">
      <svg>
        <circle cx="11.998" cy="11.998" fillRule="nonzero" r="9.998" />
      </svg>
      <p>{title}</p>
    </button>
    <div className="todo_items_right">
      <button>
        <span className="visually-hidden">Edit</span>
        <svg>
          <path d="" />
        </svg>
      </button>
      <button>
        <span className="visually-hidden">Delete</span>
        <svg>
          <path d="" />
        </svg>
      </button>
    </div>
  </li>
  )
}

function TODOList({todos}:{todos: any}) {

  return (
    <ol className="todo_list">
      { todos && todos.length > 0 ? (
        todos?.map((item, index) => <Item key={index} id={item.id} title={item.title} />)
      )}
    </ol>
  );
}


export default TODOList;
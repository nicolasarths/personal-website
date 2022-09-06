import TaskDealerLayout from "../../components/task-dealer/taskDealerLayout";

export default function FirstList(){

    async function HandleSubmit(e){
        e.preventDefault()
        const firstListTitle = e.currentTarget.elements['first-list-title'].value

        console.log(firstListTitle)
        const response = await fetch('/api/task-dealer', {
            method: 'post',
            body: JSON.stringify(firstListTitle)
        })
    }
    
    return (<>
    <TaskDealerLayout>
        <form onSubmit={HandleSubmit} method="post">
            <label
                className="tasks-label"
                htmlFor="first-list-title">
                    Dê um nome para a sua lista
            </label>
            <input 
                name="first-list-title"
                className="tasks-input"
                type="text" 
                placeholder="Título da sua lista"/>
            <input
                type="submit"
                className="tasks-button"
                value="Criar" />
        </form>
    </TaskDealerLayout>
    </>)
    /*
    const [lists, setLists] = useState([]);
  const [showListsList, setShowListsList] = useState("hide");
  const [currentList, setCurrentList] = useState();
  const [SelectListPlaceholder, setSelectListPlaceholder] = useState();
  const [showAddList, setShowAddList] = useState();
  const [showAddListItem, setShowAddListItem] = useState("hide");

  useEffect(() => {
    const data = retrieveFromLocalStorage("lists");
    if (data) {
      setLists(data);
      setSelectListPlaceholder("Selecionar Lista");
      DisplayAddListItem();
    }
  }, []);

  function HandleSetList() {
    if (showListsList == "hide") setShowListsList();
    else setShowListsList("hide");
  }

  function HandleSetCurrentList(e) {
    setCurrentList(e.currentTarget.value);
    setSelectListPlaceholder("Alterar lista");
    HandleSetList();
  }

  function DisplayCreateList() {
    setShowAddList();
    setShowAddListItem("hide");
  }

  function DisplayAddListItem() {
    setShowAddListItem();
    setShowAddList("hide");
  }

  function HandleAddList(e) {
    e.preventDefault();
    const newList = {};
    Array.from(e.currentTarget.elements).forEach((field) => {
      if (!field.name) return;
      let currentId = 0;
      if (lists.length > 0) currentId = lists[lists.length - 1].id++;
      newList.id = currentId;
      newList.name = field.value;
    });

    if (newList.name.length < 3) return;
    else {
      const newLists = [...lists, newList];
      setLists(newLists);
      saveToLocalStorage("lists", newLists);
      DisplayAddListItem();
    }
  }

  function retrieveFromLocalStorage(key) {
    if (typeof window !== "undefined") {
      return JSON.parse(localStorage.getItem(key));
    }
  }
  function saveToLocalStorage(key, value) {
    if (typeof window !== "undefined") {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }

  function SelectLists() {
    return (
      <>
        <h3 onClick={HandleSetList}>{SelectListPlaceholder}</h3>
        <div className={showListsList}>
          {lists.map((list) => {
            const listId = `list${list.id}`;
            return (
              <div key={listId}>
                <input
                  key={listId}
                  type="radio"
                  id={listId}
                  name={listId}
                  value={list.name}
                  onChange={HandleSetCurrentList}
                />
                <label htmlFor={listId}>{list.name}</label>
              </div>
            );
          })}
        </div>
      </>
    );
  }

  return (
    <>
      
        

        <form
          name="add-list-item"
          id="add-list-item"
          className={showAddListItem}
        >
          <h2>{currentList}</h2>
          <SelectLists />
          <input
            type="text"
            className="tasks-input"
            placeholder="Add list item"
          />
          <button
            type="button"
            className="tasks-button add-item-button mainBtns"
          >
            ADD ITEM
          </button>
          <button
            type="button"
            className="tasks-button"
            onClick={DisplayCreateList}
          >
            CREATE NEW LIST
          </button>
          <table className="table">
            <tbody className="list"></tbody>
          </table>
        </form>

        <form
          name="add-list"
          id="add-list"
          className={showAddList}
          onSubmit={HandleAddList}
        >
          <input
            type="text"
            form="add-list"
            name="list-name"
            className="tasks-input"
            placeholder="List name"
          />

          <input
            form="add-list"
            type="submit"
            className="tasks-button"
            value="ADD LIST"
          />

          <button
            type="button"
            className="tasks-button bg-gray"
            onClick={DisplayAddListItem}
          >
            CANCEL
          </button>
        </form>
      </div>
    </>
  ); */
}
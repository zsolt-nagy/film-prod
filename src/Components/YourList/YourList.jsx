import "../YourList/YourList.css";

/*
    props.chore [
        { task: "first task", comment: "first comment", id: 1 },
        { task: "second task", comment: "second comment", id: 2 }
    ]
*/
function YourList(props) {
    const handleDelete = (event) => {
       
       props.deleteChore(event.target.dataset.id);
    }

    const choreItem = props.chores.map((chore) =>
        <div className="checklist">
            <li key={chore.id}>
                {chore.task}: {chore.comment}
                <button className="btn-style btn-delete" data-id={chore.id} onClick={handleDelete}>Delete</button>
            </li>
        </div>
        
    )
    return (
        <>
            <div className="body-style">
                <h3>Your List</h3>
                <ul>{choreItem}</ul>
            </div>
           
        </>
    );
}

export default YourList;
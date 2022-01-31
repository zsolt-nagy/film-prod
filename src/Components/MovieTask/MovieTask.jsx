import "../MovieTask/MovieTask.css";
import { useState } from "react";
import ProcessList from "../ProcessList/ProcessList";
import YourList from "../YourList/YourList";

function TaskList() {
    const filmTasks = ["Finalize Script", "Create Budget", "Secure Location", "Secure Crew", "Secure Talent", "Create Shooting Schedule"];

    const listTasks = filmTasks.map((filmTask) => 
    <li key={filmTask.toString()}>
        {filmTask}
    </li>);

    console.log(listTasks); 
return listTasks;
};

function MovieTask(props) {
    const [choreItem, setChoreItem] = useState([]);

    const addChore = (newChore) => {
        // At least shallow-clone of orginal chore list
        const newChoreList = [...choreItem, newChore];
        setChoreItem(newChoreList);
    }

    const deleteChore = (id) => {
        const newChoreList = choreItem.filter(chore => chore.id.toString() !== id);
        setChoreItem(newChoreList);
    }

    return (
        <>
        <h1 className="headstuff">The Fimmaking Process</h1>
        <p>
            So, you think you're ready to begin shooting your film project. Everyone has their own process for filmmaking, however, some steps are universal. Go through the checklist and make note of how you're doing in the comment field.
        </p>
        <h3>Universal Checklist - Preproduction</h3>
        <div className="checklist">
            <ul>
                <li><TaskList /></li>
            </ul>
        </div>

        <div>
            <ProcessList addChore={addChore}/>
        </div>

        <div>
            <YourList chores={choreItem} deleteChore={deleteChore} />
        </div>
        </>
    )
}

export default MovieTask;
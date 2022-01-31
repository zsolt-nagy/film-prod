import "../ProcessList/ProcessList.css";
import { useState } from "react";

function ProcessList(props) {
    const [assignId, setAssignId] = useState(1);

    const handleSubmit = (event) => {
        event.preventDefault();
        const taskEntered = document.querySelector("[name=task]");
        const commentEntered = document.querySelector("[name=comment]");
        if(taskEntered.value.trim().length > 0) {
            props.addChore({
                task: taskEntered.value,
                comment: commentEntered.value,
                id: assignId
            });
            taskEntered.value = "";
            commentEntered.value = "";
            setAssignId(assignId + 1);
        }
        
    };

    return (
        <>
            <form action="#" method="GET" onSubmit={handleSubmit}>
                <div className="form-item">
                    <label>
                        Task:
                        <input type="text" name="task" className="text-field" />
                    </label>
                </div>
                <div className="form-item">
                    <label>
                        Comment:
                        <input type="text" name="comment" className="text-field" />
                    </label>
                </div>
                <div  className="form-item">
                    <button type="submit" className="btn-style">Add</button>
                </div>
            </form>       
        </>
    )
}

export default ProcessList;
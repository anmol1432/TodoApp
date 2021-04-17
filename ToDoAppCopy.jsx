import React, { useState, useEffect } from 'react';
import Button from "@material-ui/core/Button";
import "./ToDo.css"; // the ToDo app css
import db from "./firebase";
import firebase from 'firebase';
import Delete from "@material-ui/icons/Delete";


const ToDoAppCopy = (props) => {
    const [Input, setInput] = useState([]); // for getting input data
    const [Items, setItems] = useState([]); // for storeing input data

    useEffect(() => {
        // this piece loads when app load
        const todoCollections = db.collection('todos');
        todoCollections.orderBy('timestamp', 'desc').onSnapshot(snapshot => {
            setItems(snapshot.docs.map(doc => ({ id: doc.id, todo: doc.data().todo })))
        })
        console.log(Items, "kfkfk");
    }, [])

    function inputevent(event) {
        const val = event.target.value;
        setInput(val)
    };

    // adding todo
    const listitems = () => {
        db.collection('todos').add({
            todo: Input,
            timestamp: `${firebase.firestore.FieldValue.serverTimestamp()}`
        })
        setInput('');
    };

    // the deleItems for deleteing item from Input
    const deletItems = (event) => {
        let id = event.target.name;
        const todosCollection = db.collection('todos')
        console.log("jjd", id);
    }


    return (
        <>
            <div className="todomain text-center">
                <div className="todoinner">
                    <h2 className="toDoHeading">ToDo App</h2>
                    <div className="inputOrBtn">
                        <input type="text" placeholder="Add a Items..." className="input" value={Input} onChange={inputevent} />
                        <Button onClick={listitems}>✔️</Button>
                    </div>
                </div>
            </div>
            {Items.length > 0 ?
                <ol className="list">
                    {Items.map((currentValue, index) => {
                        return (<><li key={index}>
                            <button className="cut" onClick={() => db.collection('todos').doc(currentValue.id).delete()} id={currentValue.id} name={currentValue.id} key={index}><Delete /></button>
                            {currentValue.todo}</li>
                        </>)
                    })}
                </ol> : <h2 className="text-center text-dark mt-5">List is empty</h2>
            }
        </>)

} 
export default ToDoAppCopy;
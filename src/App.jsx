import React from "react";
import { createStore } from "redux";

export default function App() {
  let init_state = [];

  const ADD_TODO = "add_todo";

  function addTodoAction(text, completed, dueDate) {
    return {
      type: ADD_TODO,
      text,
      completed,
      dueDate,
    };
  }

  let todo_store = (state = init_state, action) => {
    if (action.type === ADD_TODO) {
      return [
        ...state,
        {
          text: action.text,
          completed: action.completed,
          dueDate: action.dueDate,
        },
      ];
    }
    return state;
  };

  let store = createStore(todo_store);
  const unsubscribe = store.subscribe(() => console.log(store.getState()));
  store.dispatch(
    addTodoAction("todo1", false, new Date().toLocaleDateString())
  );
  store.dispatch(addTodoAction("todo2", true, new Date().toLocaleDateString()));
  store.dispatch(
    addTodoAction("todo3", false, new Date().toLocaleDateString())
  );
  unsubscribe();

  return <div>App</div>;
}

// ************************************* First Redux Program *************************************

//   let init_state = 0;
//   let increament_action = {
//     type: "increament",
//   };
//   let decreament_action = {
//     type: "decreament",
//   };

//   const do_increamet = (state) => {
//     return state + 1;
//   };
//   const do_decreament = (state) => {
//     return state - 1;
//   };

//   function counter_store(state = init_state, action) {
//     switch (action.type) {
//       case "increament":
//         return do_increamet(state);
//       case "decreament":
//         return do_decreament(state);
//       default:
//         return state;
//     }
//   }

//   let store = createStore(counter_store);
//   store.subscribe(() => {
//     console.log("Change Happned to state");
//     console.log(store.getState());
//   });
//   store.dispatch(increament_action);
//   store.dispatch(decreament_action);
//   store.dispatch(increament_action);
//   store.dispatch(increament_action);

import { Header } from "./components/Header";

// styles
import "./global.css";
import styles from "./App.module.css"
// import { AddForm } from "./components/AddForm";
import { TasksWrapper } from "./components/TasksWrapper";

function App() {

  return (
    <>
      <Header/>
      <div className={styles.container}>
        {/* <AddForm /> */}
        <TasksWrapper />
      </div>
    </>
  )
}

export default App

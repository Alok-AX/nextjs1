import { addPost } from "../../../lib/action";
import styles from "./serveractiontest.module.css"

const  ServerActionTest =()=>{

    // const actionInCompoent = async ()=>{
    //      "use server"
    //     console.log("it's works")
    // }

  return(
    <>
      <form action={addPost} className={styles.server_test}>
        <input type="text" placeholder="title" name="title" />
        <input type="text" placeholder="description" name="description" />
        <input type="text" placeholder="slug" name="slug"/>
        <input type="text"  placeholder="userId" name="userId"/>
        <button>Test me</button>
      </form>
    </>
  )
}

export default ServerActionTest;
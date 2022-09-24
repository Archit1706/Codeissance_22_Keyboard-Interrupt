import { Progress } from "rsuite";
import "rsuite/dist/rsuite.min.css";
  
function App() {

    const styles = {
        container: `flex flex-col font-extrabold w-3/6	text-4xl text-center align-center justify-center items-center h-34 mx-4 mt-4 px-6 py-2.5 border-4 border-solid shadow-lg shadow-cyan-300/50	 rounded-3xl hover:scale-105`,
        subContainer: `items-center flex flex-col w-3/6`,
    }

    return (
        <div className={styles.container}>
            <div className={styles.subContainer}>
            <h1 >Calories Consumed</h1>
            <Progress.Line percent={60} vertical={false} />
            </div>
        </div>
    );
}
  
export default App;
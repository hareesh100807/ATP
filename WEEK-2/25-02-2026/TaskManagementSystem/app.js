import { addTask ,getAllTasks,completeTask} from "./task.js";
console.log(addTask("eating","High","2024-12-13"))
console.log(addTask("writing","Low","2024-12-14"))
console.log(addTask("reading","medium","2024-12-15"))
console.log(addTask("sleeping","high","2024-12-16"))
console.log(addTask("running","High","2024-12-17"))
getAllTasks()
completeTask(2)
getAllTasks()
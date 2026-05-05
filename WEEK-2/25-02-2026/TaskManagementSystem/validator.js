//validate task title
function validateTitle(title) {
  if (!title) {
    return "Title required";
  }
  if (title.length <= 3) return "Minimum 3 characters required";
  else return true;
}

//validate priority
function validatepriority(priority) {
  if (priority === "low" || priority === "medium" || priority === "high")
    return true;
  else return "Invalid priority";

  // const prioritiees=['LOW','MEDIUM','HIGH']
  // let result=priorities.includes(priority)
  // if(result===false){
  //     return "Invalid priority"
  // }return true
}
//validate due date
function validateDueDate(date) {
  let dueDate = new Date("2024-10-20"); //yyyy-mm-dd
  let today = new Date();
  if (dueDate > today) return "Invalid due date";
  return true;
}
export { validateDueDate, validateTitle, validatepriority };

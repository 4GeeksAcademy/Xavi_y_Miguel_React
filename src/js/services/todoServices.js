async function getToDo () {
  const response = await fetch("https://playground.4geeks.com/todo/users/mitoperni")

  const data = await response.json()

  return data
}

async function postToDo (newTask) {
  const response = await fetch("https://playground.4geeks.com/todo/todos/mitoperni", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newTask)
  })
  const data = await response.json()

  return data
}

const todoServices = {
  getToDo,
  postToDo
}

export default todoServices
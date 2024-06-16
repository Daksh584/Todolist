const z = require ("zod");

const createTodo =  z.object({
  title: zod.string(),
  description: zod.string()
})

const Updatetodo = z.object ({
  id : z.string(),
})

module.exports = {
  createTodo : createTodo,
  Updatetodo : Updatetodo  
}

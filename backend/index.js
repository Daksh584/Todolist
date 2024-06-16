const express = require("express");
const { createTodo } = require("./types");
const { todo } = require("./db");
const port = 3000;

app.use(express.json);
const app = express();
app.post("/todo", async (req, res) => {
    const createpayload = req.body;
    const parseload = createTodo.safeParse(createpayload);
    if ( !parseload.success){
        res.status(411).json({
            msg : "you sent the wrong msg"
        })
        return;
    }
    // data go in mongo
   await todo.create ({
        title : createpayload.title,
        description : createpayload.description,
        completed : false
    })
    res.json({
        msg : "Todo Created"
    })
})
    
app.put("/completed", async (req, res) => {
    const updatepayload = req.body;
    const parsePayload = Updatetodo.safeParse(updatepayload);
    if ( !parsePayload.success){
        res.status(411).json({
            msg : "you sent the wrong msg"
        })
        return;
    }
    await todo.update ({
        _id : req.body.id
    },{
        completed : true
    })
    res.json({
        msg : "Todo Completed"
    })
})

app.get("/todos", async (req, res) => {
    const todos = await todo.find();
    res.json({
        todos
    })
})

app.listen(port, () => {
    console.log(`App is listening on the port: ${port}`);
});

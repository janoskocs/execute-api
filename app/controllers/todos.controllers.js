const getSingleTodo = async (req, res) => {
    res.send("Get single todo");
};

const addSingleTodo = async (req, res) => {
    res.send("Add Single Todo");
};

const updateSingleTodo = async (req, res) => {
    res.send("Update Single Todo");
};

const deleteSingleTodo = async (req, res) => {
    res.send("Delete Single Todo");
};

module.exports = {
   getSingleTodo,
   addSingleTodo,
   updateSingleTodo,
   deleteSingleTodo
};

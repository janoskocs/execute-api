const getAllUsers = async (req, res) => {
    res.send("All users");
};

const getSingleUser = async (req, res) => {
    res.send("Single tes user");
};

const updateUser = async (req, res) => {
    res.send("Update user");
};

const deleteUser = async (req, res) => {
    res.send("Delete test user");
};

module.exports = {
    getAllUsers,
    getSingleUser,
    updateUser,
    deleteUser,
};

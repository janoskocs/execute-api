const getAllUsers = async (req, res) => {
    res.send("All users");
};

const getSingleUser = async (req, res) => {
    res.send("Single User");
};

const signUpUser = async (req, res) => {
    res.send("Sign up user");
};

const updateUser = async (req, res) => {
    res.send("Update user");
};

const deleteUser = async (req, res) => {
    res.send("Delete user");
};

module.exports = {
    getAllUsers,
    getSingleUser,
    signUpUser,
    updateUser,
    deleteUser,
};

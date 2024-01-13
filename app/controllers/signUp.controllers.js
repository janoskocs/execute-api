const signUpUser = async (req, res) => {
    const user = req.body;
    //Check if all data is provided
    if (!user.first_name || !user.last_name || !user.handle || !user.email || !user.password) {
        res.status(400).json({error: "Invalid user info. Please check first name, last name, handle, email, or password inputs."});
        return;
    }
    //Check if email exists already in db

    //Sign up the user
    res.status(201).json({'hello':"hello"});
};

module.exports = {
   signUpUser
};

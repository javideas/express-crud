module.exports.home = (req, res) => {
    // res.set( "Location", "/users" );
    // res.status(302).send("redirect!");
    /** this is the same that: */ 
    res.redirect("/users");
}
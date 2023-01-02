// @desc    get logout attempt
// @route   GET /logout
const logout = (req, res, next) => {
    req.logout((err) => {
        if (err) {
            return next(err);
        }
        req.session.destroy((err) => {
            if (err) console.log("Error : Failed to destroy the session during logout.", err);
            req.user = null;
            res.redirect("/");
        });
    });
    };

module.exports = {
    logout
}

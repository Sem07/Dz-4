module.exports = (req, res, next) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            throw new Error('Wrong data');
        }
        next();
    } catch (e) {
        res.status(400).json(e.message);
    }
};

module.exports = (req, res, next) => {
    try {
        const { id } = req.params;

        if (id < 0) {
            throw new Error('User id must > 0');
        }
        next();
    } catch (e) {
        res.status(400).json(e.message);
    }
};

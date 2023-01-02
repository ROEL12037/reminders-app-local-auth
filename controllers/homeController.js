const getIndex = (req, res) => {
    res.render('index', {title: 'Forget Me Not'})
}

module.exports = {
    getIndex
}
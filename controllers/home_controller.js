module.exports.home = async function (req, res) {
    return res.json(200, {
        message: "hey postman"
    });
};

const axios = require('axios');

module.exports = {
    register: (req, res) => {
        console.log("werk");
        const { data } = req.body;
        console.log(data);

        req.app.get('db').create_user([
            data.username,
            data.password
        ]).then(results => {
            res.status(200).json(results)
        }).catch(error => res.json(error))
    }
}
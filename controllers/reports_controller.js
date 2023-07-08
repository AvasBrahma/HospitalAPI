const Report = require('../model/report');

module.exports.getAllStatus = async function(req, res){
    try {
        let reports = await Report.find({status: req.params.status});

        if(reports.length > 0){
            return res.status(200).send({
                reports: reports,
                message: "Status of All Patients"
            })
        }else{
            return res.status(200).send({
                message: "Status Not Found"
        })
    }

    } catch (error) {
        console.log('Internal server error', error);
        return res.status(500).send({
            message: 'Internal Server Error',
        });
    }

}
const Flow = require('../models/flow');

module.exports = {
    create
}

async function create(req, res) {
    try{
        const flow = await Flow.findById(req.params.id);
        flow.reviews.push(req.body);
        flow.save(function(err) {
        res.redirect(`/flows/${flow._id}`);
        }); 
    }catch (err) {
        res.send(err);
    }
}

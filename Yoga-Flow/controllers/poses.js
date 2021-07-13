const flow = require("../models/flow");

module.exports = {
    create
}

// async function create(req, res) {
//     console.log('INSIDE POSES CREATE FUNCTION')
//     try{
//         const pose = await flow.pose.create(req.body);
//         res.redirect(`/flows/${flow._id}`);
//     }catch (err) {
//         res.send(err);
//     }
// }


async function create(req, res) {
    try{
        req.body.flow = await req.params.id;
        const poseFlow = flow.[pose](req.body);
        pose.save(function(err) {
            res.redirect(`flows/${req.params.id}`);
        })
    }catch (err) {
        res.send(err);
    }
}
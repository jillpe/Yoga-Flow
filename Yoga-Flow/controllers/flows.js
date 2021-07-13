const Flow = require('../models/flow');

module.exports = {
    index,
    show,
    new: newFlow,
    create
};

async function index(req, res) {
    try {
        const flows = await Flow.find({});
        res.render('flows/index', {
            flows
        });
    }catch (err) {
        res.send(err);
    }
}

async function show(req, res) {
    const foundFlow = await Flow.findById(req.params.id);
    res.render('flows/show', { flow: foundFlow})
}

function newFlow(req, res) {
        res.render('flows/new');
}

async function create(req, res) {
    try {
        const flow = await Flow.create(req.body);
        res.redirect(`/flows/${flow._id}`);
    } catch (err) {
        res.send(err);
    }
}

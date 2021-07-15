const Flow = require('../models/flow');

module.exports = {
    index,
    show,
    new: newFlow,
    create,
    delete: deleteFlow,
    edit,
    update
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

function newFlow(req, res) {
    res.render('flows/new');
}

async function show(req, res) {
    const foundFlow = await Flow.findById(req.params.id);
    res.render('flows/show', { flow: foundFlow})
}

async function create(req, res) {
    try {
        const flow = await Flow.create(req.body);
        res.redirect(`flows/${flow._id}`);
    } catch (err) {
        res.send(err);
    }
}

async function edit(req, res) {
    res.render(`flows/edit`, {
        flow: await Flow.findById(req.params.id)
    });
}

async function update(req, res) {
    console.log('updatedFlow');
    try{
        await Flow.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
        res.redirect('/flows')
    }catch (err) {
        res.send(err);
    }
}

async function deleteFlow(req, res) {
    try{
        const deletedFlow = await Flow.findByIdAndRemove(req.params.id);
        res.redirect('/flows')
    }catch (err) {
        res.send(err);
    }
}


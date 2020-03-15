// Import chatHistory model
History = require('./chatHistoryModel');
// Handle index actions
exports.index = function (req, res) {
    History.get(function (err, chats) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Chat History retrieved successfully",
            data: chats
        });
    });
};


// Handle create actions
exports.new = function (req, res) {
    var contact = new History();
    contact.CID = req.body.CID ? req.body.CID : contact.CID;
    contact.SID = req.body.SID;
    contact.ChName = req.body.ChName;
    contact.BotName = req.body.BotName;
    contact.AgentID = req.body.AgentID;
    contact.StartTime = req.body.StartTime;
    contact.EndTime = req.body.EndTime;
    contact.Result = req.body.Result;
// save the contact and check for errors
    contact.save(function (err) {
        // if (err)
        //     res.json(err);
res.json({
            message: 'New chat record created!',
            data: contact
        });
    });
};
// Handle view contact info
exports.view = function (req, res) {
    History.findById(req.params.contact_id, function (err, contact) {
        if (err)
            res.send(err);
        res.json({
            message: 'Contact details loading..',
            data: contact
        });
    });
};
// Handle update contact info
exports.update = function (req, res) {
History.findById(req.params.contact_id, function (err, contact) {
        if (err)
            res.send(err);
    contact.CID = req.body.name ? req.body.name : contact.CID;
    contact.SID = req.body.SID;
    contact.ChName = req.body.ChName;
    contact.BotName = req.body.BotName;
    contact.AgentID = req.body.AgentID;
    contact.StartTime = req.body.StartTime;
    contact.EndTime = req.body.EndTime;
    contact.Result = req.body.Result;
// save the contact and check for errors
        contact.save(function (err) {
            if (err)
                res.json(err);
            res.json({
                message: 'Chat History updated',
                data: contact
            });
        });
    });
};
// Handle delete contact
exports.delete = function (req, res) {
    History.remove({
        _id: req.params.contact_id
    }, function (err, contact) {
        if (err)
            res.send(err);
res.json({
            status: "success",
            message: 'Chat History deleted'
        });
    });
};
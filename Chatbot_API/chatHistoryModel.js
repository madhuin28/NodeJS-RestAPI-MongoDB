var mongoose = require('mongoose');
// Setup schema
var chatHistorySchema = mongoose.Schema({
    CID: {
        type: String,
        required: true
    },
    SID: {
        type: String,
        required: true
    },
    ChName: String,
    BotName: String,
    AgentID : String,
    StartTime: {
        type: String,
        required: true
    },
    EndTime: {
        type: String,
        required: true
    },
    Result: String,
    create_date: {
        type: Date,
        default: Date.now
    }
});
// Export History model
var History = module.exports = mongoose.model('contact', chatHistorySchema);
module.exports.get = function (callback, limit) {
    History.find(callback).limit(limit);
}
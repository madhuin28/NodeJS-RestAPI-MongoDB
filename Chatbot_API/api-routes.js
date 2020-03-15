// Filename: api-routes.js
// Initialize express router
let router = require('express').Router();

// Import chatHisotry controller
var chatHistoryController = require('./chatHistoryController.js');

// Set default API response
router.get('/', function (req, res) {
    res.json({
        status: 'API Its Working',
        message: 'Welcome to RestAPI crafted with love!'
    });
});




// Contact routes
router.route('/chats')
    .get(chatHistoryController.index)
    .post(chatHistoryController.new);
router.route('/chats/:contact_id')
    .get(chatHistoryController.view)
    .patch(chatHistoryController.update)
    .put(chatHistoryController.update)
    .delete(chatHistoryController.delete);



// Export API routes
module.exports = router;
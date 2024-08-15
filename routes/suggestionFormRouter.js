const express = require('express');
const suggestionFormController = require('../controllers/suggestionFormController');

const suggestionFormRouter =  express.Router();

suggestionFormRouter.route('/')
    .post(suggestionFormController.createFormData);

module.exports = suggestionFormRouter;
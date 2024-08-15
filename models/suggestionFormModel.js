const mongoose = require('mongoose');

const suggestionFormSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required field'],
    },
    suggestion: {
        type: String,
        required: [true, 'Suggestions is required field'],
    }
});

const SuggestionForm = mongoose.model('SuggestionForm', suggestionFormSchema);

module.exports = SuggestionForm;
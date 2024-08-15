const SuggestionForm = require('../models/suggestionFormModel')

exports.createFormData = async (req, res) => {
    try {
        const suggestionsData = await SuggestionForm.create(req.body);
        res.status(201).json({
            status: "success",
            data : {
                suggestionsData: suggestionsData
            }
        })
    } catch (err) {
        res.status(404).json({
            status: "fail",
            message: err.message
        })
    }
}
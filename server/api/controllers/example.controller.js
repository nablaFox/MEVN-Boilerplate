const httpStatus = require('http-status');
const Example = require('../models/example.model')


exports.list = async (req, res, next) => {
    try {
        const examples = await Example.list(req.query);
        const transformedExample = examples.map(example => example.transform())
        res.json(transformedExample)
    } catch(err) {
        next(err)
    }
}

exports.create = async (req, res, next) => {
    try {
        const example = new Example(req.body)
        const savedExample = await example.save()
        res.status(httpStatus.CREATED)
        res.json(savedExample.transform())
    } catch(err) {
        next(err)
    }
}


exports.remove = async (req, res, next) => {
    try {
        await Example.remove(req.query)
        res.status(httpStatus.NO_CONTENT).end()
    } catch(err) { 
        next(err) 
    }
} 
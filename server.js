const express = require('express');
const next = require('next');

// db
const connectToDatabase = require('./util/expressmongodb')

function setupServer() {
    const app = next(false);
    const handle = app.getRequestHandler();

    // the server is run on express, so that we can serve next pages and
    // run sockets at the same time, from the same server.
    const server = express()

    server.route('/schools/new').post(async (req, res) => {
        const { client, db } = await connectToDatabase();

        let inserted = await db.collection('schools').insertOne({
            name: "placeholder"
        });

        res.send(inserted.insertedId);
    });

    server.all('*', (req, res) => {
        return handle(req, res)
    });

    return server
}

module.exports = setupServer
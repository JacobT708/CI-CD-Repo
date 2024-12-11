const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('Webpage created with express and node.js for testing CI/CD');
});

const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});

process.on('SIGINT', () => {
    console.log('SIGINT received, shutting down');
    server.close(() => {
        console.log('Server closed.');
        process.exit(0);
    });
})
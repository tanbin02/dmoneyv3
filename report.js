const newman = require('newman');
require('dotenv').config();
 

 
newman.run({
    collection:`https://api.postman.com/collections/35122212-b9e8f2a3-4926-47fe-a934-b3f1336708f4?access_key=${process.env.secretKey}`,
    reporters: 'htmlextra',
    iterationCount: 1,
    reporter: {
        htmlextra: {
            export: './Reports/report.html', // If not specified, the file will be written to `newman/` in the current working directory.
        }
    }
}, function (err) {
    if (err) { throw err; }
    console.log('collection run complete!');
});
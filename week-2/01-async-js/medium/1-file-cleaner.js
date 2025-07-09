
const fs = require('fs');

// Path to the file (you can change this)
const filePath = 'sample.txt';

// Read file content
fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading the file:', err);
        return;
    }

    // Remove extra spaces (convert multiple spaces to one)
    const cleanedData = data.replace(/\s+/g, ' ').trim();

    // Write the cleaned data back to the same file
    fs.writeFile(filePath, cleanedData, 'utf8', (err) => {
        if (err) {
            console.error('Error writing to the file:', err);
            return;
        }

        console.log('File cleaned successfully!');
    });
});

- [ ] 

# Important #
- Logic for the calculate must be on the server.js

# TO DO LIST # 

# Folders setup #
- [x] Set up files
- [x] Get package.json --> type in terminal--> npm init --yes
- [x] Get express --> type in terminal --> npm install express
- [x] Make folders
    - [x] Folder: server
        - [x] File: server.js
        - [x] Folder: public
            - [x] File: index.html
            - [x] Folder: scripts
                - [x] File: client.js
            - [x] Folder: styles
                - [x] style.css
            - [x] Folder: vendors
                - [x] File: jQuery.js

# Package.json setup #
- [x] after test, type "start": "node server/server.js"

# server.js setup #
- [x] const express = require('express');
- [x] const app = express();
- [x] const PORT = 5000;
- [x] app.listen(PORT, () => {
    console.log('listening on port', PORT)
});
- [x] app.use(express.static('server/public'))

# index.html setup #
- [x] Link scripts and links in HTML

# REQUIRED FEATURES #

# CALCULATOR #
- [x] 1 input value.
- [x] 4 buttons --> Select mathmatical operation (+, -, *, /)
- [x] 1 input value.
- [x] 1 button --> Equal sign, submit button:
    - [x] On Click:
        - [x] Captures inputs
        - [x] Bundles inputs into an OBJECT
        - [x] Sends OBJECT to server via a POST.
- [x] 1 button --> clears the input fields.

# HISTORY # 
- [x] Keep historical record of all math operations and solutions.
- [x] Append all previous calculations on DOM when it loads using GET request.
- [ ] Update when new calculation is made.
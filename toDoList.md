- [ ] 

# Important #
- Logic for the calculate must be on the server.js

# TO DO LIST # 

# Folders setup #
- [ ] Set up files
- [ ] Get package.json --> type in terminal--> npm init --yes
- [ ] Get express --> type in terminal --> npm install express
- [ ] Make folders
    - [ ] Folder: server
        - [ ] File: server.js
        - [ ] Folder: public
            - [ ] File: index.html
            - [ ] Folder: scripts
                - [ ] File: client.js
            - [ ] Folder: styles
                - [ ] style.css
            - [ ] Folder: vendors
                - [ ] File: jQuery.js

# Package.json setup #
- [ ] after test, type "start": "node server/server.js"

# server.js setup#
- [ ] const express = require('express');
- [ ] const app = express();
- [ ] const PORT = 5000;
- [ ] app.listen(PORT, (){
    console.log('listening on port', PORT)
});
- [ ] app.use(express.static('server/public'))

# index.html setup #
- [ ] Link scripts and links in HTML

# REQUIRED FEATURES #

# CALCULATOR #
- [ ] 2 input values.
- [ ] 4 buttons --> Select mathmatical operation (+, -, *, /)
- [ ] 1 button --> Submit button:
    - [ ] On Click:
    - [ ] Captures inputs
    - [ ] Bundles inputs into an OBJECT
    - [ ] Sends OBJECT to server via a POST.
- [ ] 1 button --> clears the input fields.

# HISTORY # 
- [ ] Keep historical record of all math operations and solutions.
- [ ] Append all previous calculations on DOM when it loads using GET request.
- [ ] Update when new calculation is made.
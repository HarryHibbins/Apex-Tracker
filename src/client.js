require('dotenv').config
api_key = process.env.api_key;
params = "&player=HHibbins&platform=PS4"
fetch(`https://api.mozambiquehe.re/auth${api_key}${params}`, {
})
    .then(response => response.json())
    .then(async data => {

});
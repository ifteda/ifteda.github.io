var Airtable = require("airtable");

let BASE_ID = process.env.AIRTABLE_BASE_ID;
let PERSONAL_ACCESS_TOKEN = process.env.AIRTABLE_PERSONAL_ACCESS_TOKEN;

Airtable.configure({
    apiKey: PERSONAL_ACCESS_TOKEN
});

var base = Airtable.base(BASE_ID);

export default base;
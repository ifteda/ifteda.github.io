const NodeCache = require('node-cache');
const Airtable = require('airtable');

const cache = new NodeCache({ stdTTL: process.env.CACHE_TTL || 43200 }); // default: 12 hours

// Validate that required environment variables are set
if (!process.env.AIRTABLE_PERSONAL_ACCESS_TOKEN) {
    console.error('ERROR: AIRTABLE_PERSONAL_ACCESS_TOKEN is not set');
}
if (!process.env.AIRTABLE_BASE_ID) {
    console.error('ERROR: AIRTABLE_BASE_ID is not set');
}

// Configure Airtable with Personal Access Token
Airtable.configure({
    apiKey: process.env.AIRTABLE_PERSONAL_ACCESS_TOKEN
});

const base = Airtable.base(process.env.AIRTABLE_BASE_ID);

const fetchFromAirtable = (tableName, view = 'active') => {
    return new Promise((resolve, reject) => {
        const records = [];
        base(tableName)
            .select({ view })
            .eachPage(
                (pageRecords, fetchNextPage) => {
                    records.push(...pageRecords);
                    fetchNextPage();
                },
                (err) => {
                    if (err) reject(err);
                    else resolve(records);
                }
            );
    });
};

exports.handler = async (event, context) => {
    // parse URL to get table name and view
    const pathSegments = event.path.split('/').filter(Boolean);
    const table = pathSegments[pathSegments.length - 1];
    const view = event.queryStringParameters?.view || 'active';
    const cacheKey = `${table}:${view}`;

    try {
        // check cache first
        const cachedData = cache.get(cacheKey);
        if (cachedData) {
            console.log(`Cache hit for ${cacheKey}`);
            return {
                statusCode: 200,
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                },
                body: JSON.stringify({ data: cachedData, cached: true })
            };
        }

        // fetch from Airtable if not cached
        console.log(`Fetching from Airtable: ${cacheKey}`);
        const records = await fetchFromAirtable(table, view);

        // store in cache
        cache.set(cacheKey, records);

        return {
            statusCode: 200,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            },
            body: JSON.stringify({ data: records, cached: false })
        };
    } catch (error) {
        console.error(`Error fetching ${table}:`, error.message || error);
        return {
            statusCode: 500,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            },
            body: JSON.stringify({ error: error.message || 'Failed to fetch data' })
        };
    }
};

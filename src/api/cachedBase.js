/**
 * Cached base module - proxies Airtable requests through backend cache
 * In netlify dev: /api proxies to local netlify functions
 * In production: /api proxies to netlify functions
 */

const API_BASE_URL = '/api';

class CachedBase {
    constructor(tableName) {
        this.tableName = tableName;
    }

    select(options = {}) {
        const view = options.view || 'active';

        return {
            eachPage: async (onPageData, onDone) => {
                try {
                    const response = await fetch(`${API_BASE_URL}/${this.tableName}?view=${view}`);
                    const json = await response.json();

                    if (!response.ok) {
                        throw new Error(json.error || 'Failed to fetch data');
                    }

                    // transform backend response to match Airtable format
                    const records = json.data.map(record => ({
                        id: record.id,
                        fields: record.fields
                    }));

                    // call the callback with the records
                    onPageData(records, () => {
                        // no more pages in cached backend
                    });

                    // call the done callback
                    if (onDone) {
                        onDone();
                    }
                } catch (error) {
                    console.error('Error fetching cached data:', error);
                    if (onDone) {
                        onDone(error);
                    }
                }
            }
        };
    }
}

/**
 * Create a cached base proxy
 * Usage: cachedBase('tableName').select({view: 'active'}).eachPage(...)
 */
const cachedBase = (tableName) => new CachedBase(tableName);

export default cachedBase;

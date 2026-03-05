export function getGhlHeaders(location: 'Fifth Ave' | 'Barn Gym') {
    const apiKey = location === 'Fifth Ave'
        ? process.env.GHL_API_KEY_FIFTH_AVE
        : process.env.GHL_API_KEY_BARN_GYM;

    if (!apiKey) {
        throw new Error(`Missing GHL API key for ${location}. Please ensure GHL_API_KEY_FIFTH_AVE or GHL_API_KEY_BARN_GYM is set.`);
    }

    return {
        'Authorization': `Bearer ${apiKey}`,
        'Version': '2021-07-28',
        'Content-Type': 'application/json'
    };
}

export async function ghl_get_contact(args: { location: 'Fifth Ave' | 'Barn Gym', email: string }) {
    try {
        const headers = getGhlHeaders(args.location);

        // GoHighLevel v2 API endpoint for searching contacts
        const url = new URL('https://services.leadconnectorhq.com/contacts/search');
        url.searchParams.append('query', args.email);

        const response = await fetch(url.toString(), {
            method: 'GET',
            headers
        });

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`GHL API Error: ${response.status} ${response.statusText} - ${errorText}`);
        }

        const data = await response.json();

        // If contacts array is empty, return a clear message
        if (!data.contacts || data.contacts.length === 0) {
            return { message: `No contacts found in ${args.location} matching email: ${args.email}` };
        }

        return data; // Returns the contact details
    } catch (error: any) {
        return { error: `Failed to fetch contact from GHL: ${error.message}` };
    }
}

export async function ghl_add_note(args: { location: 'Fifth Ave' | 'Barn Gym', contactId: string, body: string }) {
    try {
        const headers = getGhlHeaders(args.location);

        const response = await fetch(`https://services.leadconnectorhq.com/contacts/${args.contactId}/notes`, {
            method: 'POST',
            headers,
            body: JSON.stringify({ body: args.body })
        });

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`GHL API Error: ${response.status} ${response.statusText} - ${errorText}`);
        }

        return await response.json();
    } catch (error: any) {
        return { error: `Failed to add note in GHL: ${error.message}` };
    }
}

'use server';

import Airtable from 'airtable';

const base = new Airtable({
  apiKey: process.env.AIRTABLE_API_KEY,
}).base(process.env.AIRTABLE_BASE_ID!);

export async function rsvpAction(formData: FormData): Promise<void> {
  const email = formData.get('email') as string;

  if (!email) {
    return;
  }

  

  await base(process.env.AIRTABLE_TABLE_NAME!).create({
    Email: email, // or Email — must match Airtable column
  });
 
}

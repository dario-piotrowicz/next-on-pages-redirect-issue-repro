'use server'

import { redirect } from 'next/navigation'

export async function action(formData: FormData) {
  console.log(`\x1b[31m redirecting to / \x1b[0m`);
  redirect('/');
}

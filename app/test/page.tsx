import { action } from './actions';

export const runtime = 'edge';

import { redirect } from 'next/navigation'


export default function Page() {
    redirect('/');

  return (
    <main>
        <form>
            <button formAction={action}>Btn</button>
        </form>
    </main>
  )
}
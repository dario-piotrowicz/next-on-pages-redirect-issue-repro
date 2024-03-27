import { action } from './actions';

export const runtime = 'edge';

export default function Page() {
  return (
    <main>
        <form>
            <button formAction={action}>Back to <code>/</code></button>
        </form>
    </main>
  )
}

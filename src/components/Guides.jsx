import { Button } from '@/components/Button'
import { Heading } from '@/components/Heading'

const guides = [
  {
    href: '/errors',
    name: 'Errors',
    description:
      'Read about the different types of errors returned by the API.',
  },
  {
    href: '/self_hosting',
    name: 'Self Hosting',
    description: 'Learn how to self-host Arguflow on your own infrastructure.',
  },
  {
    href: '/custom_embed_server',
    name: 'Custom Embedding Models',
    description: 'Learn how to use custom embedding models with Arguflow.',
  },
  {
    href: '/custom_card_segment',
    name: 'Custom Card Segmentation',
    description: 'Learn how to design custom card segementers for Arguflow.',
  },
  {
    href: '/environment_vars',
    name: 'Environment Variables',
    description:
      'Learn about the different environment variables used by Arguflow.',
  }
]

export function Guides() {
  return (
    <div className="my-16 xl:max-w-none">
      <Heading level={2} id="guides">
        Guides
      </Heading>
      <div className="not-prose mt-4 grid grid-cols-1 gap-8 border-t border-zinc-900/5 pt-10 dark:border-white/5 sm:grid-cols-2 xl:grid-cols-4">
        {guides.map((guide) => (
          <div key={guide.href}>
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
              {guide.name}
            </h3>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
              {guide.description}
            </p>
            <p className="mt-4">
              <Button href={guide.href} variant="text" arrow="right">
                Read more
              </Button>
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

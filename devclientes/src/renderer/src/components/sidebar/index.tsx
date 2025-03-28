import * as Collapsible from '@radix-ui/react-collapsible'
import clsx from 'clsx'
import { ArrowBendDoubleUpLeft } from 'phosphor-react'

export function Sidebar() {
  const isMacOS = process.platform === 'darwin'

  return (
    <Collapsible.Content className="bg-gray-950 flex-shrink-0 border-r border-slate-600 h-screen relative group overflow-hidden">
      <Collapsible.Content>
        <Collapsible.Trigger
          className={clsx(
            'absolute h-7 w-7 right-4 z-[99] text-white hover:scale-105 duration-200 inline-flex items-center justify-center',
            {
              'top-[1.125rem]': isMacOS,
              'top-6': !isMacOS
            }
          )}
        >

            <ArrowBendDoubleUpLeft className='h-7 w-7'/>

        </Collapsible.Trigger>
      </Collapsible.Content>
      <div
        className={
            clsx(
                'flex-1 flex flex-col h-full gap-8 w-[220px] transition-opacity duration-200',  
                {
                    'pt-6': !isMacOS
                }
            )
        }
      >
        <nav className='flex mx-2 flex-col gap-8 text-slate-100'>
          <button>Texte Home</button>
        </nav>
      </div>
    </Collapsible.Content>
  )
}

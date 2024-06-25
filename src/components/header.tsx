import { SiGithub } from '@icons-pack/react-simple-icons'
import { Logo } from '@tszhong0411/ui'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header className='fixed inset-x-0 top-0 z-40 bg-black/50 shadow-sm saturate-100 backdrop-blur-[10px]'>
      <div className='mx-auto flex h-[60px] max-w-4xl items-center justify-between px-8'>
        <Link href='/' aria-label='Home' title='Home'>
          <Logo width={24} height={24} />
        </Link>
        <div className='flex items-center justify-center gap-6'>
          <a
            href='https://github.com/chitrakshbotwala'
            target='_blank'
            rel='noreferrer noopener'
            aria-label='GitHub'
          >
            <SiGithub />
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header

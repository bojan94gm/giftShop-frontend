import React from 'react'
import { TfiGift } from 'react-icons/tfi'
import Link from 'next/link'
import { Button } from '../ui/button'

export default function Logo() {
  return (
    <Button asChild variant='outline' size='icon'>
      <Link href={'/'}>
        <TfiGift className='w-6 h-6' />
      </Link>
    </Button>
  )
}

import React from 'react'
import { RiShoppingCartLine } from 'react-icons/ri'
import { Button } from '../ui/button'
import Link from 'next/link'
import { ShoppingBag } from 'lucide-react'

export default function CartButton() {
  const numOfProducts = 5
  return (
    <Button asChild variant='outline' size='icon'>
      <div className='relative rounded'>
        <Link href={'/cart'}>
          <ShoppingBag
            size={20}
            strokeWidth={1.5}
            className='group-hover:text-primary'
          />
        </Link>
        <span className='absolute -top-1 -right-1 bg-primary text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold'>
          {numOfProducts}
        </span>
      </div>
    </Button>
  )
}

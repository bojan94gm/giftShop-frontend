import React from 'react'
import { LiaBarsSolid } from 'react-icons/lia'
import { Button } from '../ui/button'
import Link from 'next/link'
import { DropdownMenu } from '../ui/dropdown-menu'
import { DropdownMenuContent } from '../ui/dropdown-menu'
import { DropdownMenuItem } from '../ui/dropdown-menu'
import { DropdownMenuSeparator } from '../ui/dropdown-menu'
import { DropdownMenuTrigger } from '../ui/dropdown-menu'
import { links } from '@/utils/links'
import { AlignRight, CircleUser } from 'lucide-react'

export default function LinksDropdown() {
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Button asChild variant='outline' size='icon'>
            <AlignRight size={24} strokeWidth={1} className='text-slate-800' />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className='m-2 ' sideOffset={10} align='start'>
          {links.map((link) => {
            return (
              <DropdownMenuItem key={link.href}>
                <Button asChild className='w-full bg-primary text-secondary '>
                  <Link href={link.href}>{link.label}</Link>
                </Button>
              </DropdownMenuItem>
            )
          })}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}

import { FlexBox } from '@shared/ui/FlexBox'
import { Typography } from '@shared/ui/Typography'
import React from 'react'

export const Footer: React.FC = () => {
  return (
    <footer className="w-full">
        <hr className=' w-full h-px border-0 bg-[#80808030]'/>
        <FlexBox className='max-md:flex-col p-[20px]' justify='between' align='center' >
            <Typography className='text-[14px]' >Copyright © 2025 TuneUp</Typography>
            <FlexBox justify='between' align='center' className='gap-[34px]'>
                <Typography className='text-[13px]' pointer  >About</Typography>
                <Typography className='text-[13px]' pointer  >Contact</Typography>
                <Typography className='text-[13px]' pointer>Privacy Policy</Typography>
            </FlexBox>
        </FlexBox>
    </footer>
  )
}

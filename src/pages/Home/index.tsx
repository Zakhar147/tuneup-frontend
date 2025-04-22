import { CreateAccountButton } from '@shared/ui/Button';
import { FlexBox } from '@shared/ui/FlexBox';
import { Typography } from '@shared/ui/Typography';
import React from 'react'

const Home: React.FC = () => {
  return (
    <FlexBox
     direction='col'
     justify='center'
     align='center' 
     className='w-full h-full gap-[81px] py-[141px] '
    >
      <FlexBox
       direction='col' 
       justify='center' 
       align='center' 
       className='gap-[9px]'
      >
        <Typography
         title 
         className='text-[48px] font-bold'
        >
          Play and Grow up with TuneUp!
        </Typography>
        <Typography
         className="w-full text-center md:max-w-[500px] mx-auto break-words text-[20px] font-medium"
        >
          TuneUp helps you learn to play bass with tabs and chords for all your favorite songs.
        </Typography>
        <CreateAccountButton/>
      </FlexBox>

    </FlexBox>
  )
}

export default Home;
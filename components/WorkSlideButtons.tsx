"use client"; 

import {FC} from 'react'

import { useSwiper } from 'swiper/react';
import {PiCaretLeftBold, PiCaretRightBold} from 'react-icons/pi';

interface Props { //component parameters 
    containerStyles: string,
    buttonStyles: string,
}

const WorkSlideButtons: FC<Props> = ({containerStyles, buttonStyles}) => {

    const swiper = useSwiper();
  return (
    <div className={containerStyles}>
      <button className={buttonStyles} onClick={() => swiper.slidePrev()}>
        <PiCaretLeftBold />
      </button>
      <button className={buttonStyles} onClick={() => swiper.slideNext()}>
        <PiCaretRightBold />
      </button>
    </div>
  )
}

export default WorkSlideButtons

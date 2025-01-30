import React, { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge';

interface IProps extends ComponentProps<'button'> {
  children: React.ReactNode;
}

export default function Button({ children, ...props }: IProps) {
  const className = twMerge('bg-[#F26666] px-5 py-2 w-[152px] rounded-md text-white font-normal text-base hover:brightness-110 transition ease-in-out duration-150 font-fira-sans-condensed', props.className);
  return (
    <button {...props} className={className}>
      {children}
    </button>
  )
}

import React from 'react'
import * as Icon from '@ant-design/icons'
import classNames from 'classnames'
interface NodeTitleProps{
    icon?:string;
    label?:string;
    iconClassName:string;
}
const NodeTitle:React.FC <NodeTitleProps> = ({icon,label,iconClassName}) => {
  const NewIcon=Icon[icon as keyof typeof Icon] as any;
  return (
    <div 
    className='flex justify-center items-center py-1 gap-x-2'
    >
        {
            icon && (
                <div className={classNames ('flex justify-center items-center my-1 p-2 h-full text-sm',iconClassName)}>
                    <NewIcon />
                </div>
            )
        }
        <div className='flex flex-1'>
            <h1>{label && <p className='font-bold'>{label}</p>}</h1>
        </div>
    </div>
  )
}

export { NodeTitle}
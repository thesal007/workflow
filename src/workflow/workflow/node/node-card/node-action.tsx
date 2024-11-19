import classNames from 'classnames'
import {Button,Tooltip} from 'antd'
import { CopyOutlined,DeleteOutlined,SettingOutlined } from '@ant-design/icons'
interface NodeActionProps{
    selected:boolean;
    nodeId:string;
}
const NodeAction:React.FC<NodeActionProps> = ({selected,nodeId}) => {
    console.log(nodeId);
    
  return (
    <div
    className={classNames('absolute -right-10 top-1 transition-opacity ease-in-out duration-100',
        !selected ? 'hidden': 'opacity-100',
    )}
    >
        <div className='flex flex-col gap-y-2'>
            <Tooltip placement='right' title='Setting'>
                <Button 
                    shape='circle'
                    icon={<SettingOutlined/>}
                    type='primary'
                    onClick={(e) =>{

                        e.stopPropagation();
                        console.log('setting');
                    }}
                />
            </Tooltip>
            <Tooltip placement='right' title='Duplicate'>
                <Button 
                    ghost
                    shape='circle'
                    icon={<CopyOutlined/>}
                    type='primary'
                    onClick={(e) =>{

                        e.stopPropagation();
                        console.log('setting');
                    }}
                />
            </Tooltip>
            <Tooltip placement='right' title='Delete'>
                <Button 
                    ghost
                    danger
                    shape='circle'
                    icon={<DeleteOutlined/>}
                    type='primary'
                    onClick={(e) =>{

                        e.stopPropagation();
                        console.log('setting');
                    }}
                />
            </Tooltip>
        </div>
    </div>
  )
}

export  {NodeAction}
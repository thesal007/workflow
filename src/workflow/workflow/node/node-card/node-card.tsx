import { HolderOutlined } from "@ant-design/icons"
import { useReactFlow } from "@xyflow/react"
import {Card} from 'antd'
import classNames from 'classnames'
import React,{ PropsWithChildren, useCallback } from 'react'
import { TaskType, TaskRegistry  } from "../../constant"
import { NodeAction } from "./node-action"
import { NodeTitle  } from "./node-title"

interface NodeCardProps extends PropsWithChildren{
    type: TaskType;
    nodeId:string;
    selected?: boolean; 
}

const NodeCard:React.FC<NodeCardProps> = (props) => {
  const {nodeId,selected,children,type}=props;
  const {getNode,setCenter}=useReactFlow();
  const task= TaskRegistry[type];

  if(!task) return;
  const onDoubleClick  =useCallback(()=>{
    const node =getNode(nodeId);
    if (!node) return;
    const {position,measured}=node;
    if(!position || !measured) return;
    const {width,height} =measured;
    const x = position.x + width! /2;
    const y = position.y + height!/2;
    if(x=== undefined || y=== undefined) return;
    setCenter (x,y, {zoom: 1,duration: 500});
  },[getNode,nodeId,setCenter])
  return (
   <div className="relative">
    <Card
    size ='small'
    bordered ={true}
    title={<NodeTitle {...task} />}
    onDoubleClick={onDoubleClick}
    classNames={{body: '!p-0'}}
    extra ={
        <a className="cursor-grap drag-handle">
            <HolderOutlined className="text-lg rotate-90"/>
        </a>
    }
    className={classNames('cursor-default rounded-md w-80 text-xs gap-1 flex flex-col',{
        'border-primary': selected
    })}
    >
    
    {children}
    </Card>
    <NodeAction selected={!!selected} nodeId={nodeId} />
   </div>
  )
}

export { NodeCard}
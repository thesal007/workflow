import TaskMenu from './workflow/taskmenu'
import {useTheme} from 'next-themes'
import NodeComponent from './workflow/node/node-card/node-component'
import { addEdge, Background, BackgroundVariant, ColorMode, Connection, Edge, ReactFlow, useEdgesState, useNodesState, useReactFlow } from '@xyflow/react'
import { TaskType } from './workflow/constant'
import { CreateFlowNode } from './workflow/node/create-flow-node'
import CustomEdge from './workflow/edge'
import { useCallback, useRef } from 'react'
import { useDnD } from './context/dnd'

const nodeTypes={
  IF_ELSE: NodeComponent,
  APPROVAL: NodeComponent
}
const edgeType={
  customEdge: CustomEdge,
}
const snapGrid: [number,number] =[50,50];
const DnDFlow = () => {
const [type]=useDnD();
const {theme} =useTheme();
const reactFlowWrapper =useRef(null);
const {screenToFlowPosition} =useReactFlow();
const [nodes,setNodes,onNodeChange] =useNodesState([CreateFlowNode(TaskType.IF_ELSE)])

const [edges, setEdges, onEdgeChange] = useEdgesState<Edge>([]);

const onDragOver =useCallback((event: React.DragEvent)=>{
  event.preventDefault();
  event.dataTransfer.dropEffect='move';
},[])
const onDrop =useCallback(
  (event: React.DragEvent)=>{
    event.preventDefault();
    if(!type) return;
    const position = screenToFlowPosition({
      x: event.clientX,
      y: event.clientY,
    })
    const flowNode= CreateFlowNode(type as TaskType, position);
    setNodes((nds) => nds.concat (flowNode))
  },
  [screenToFlowPosition,type]
)
const onConnect = useCallback(
  (connection: Connection) => {
    // Add the custom edge with the specified type
    const edge = { ...connection, type: 'customEdge' };
    setEdges((eds) => addEdge({...edge}, eds)); // Use addEdge to manage edge addition
  },
  [setEdges]
);



  return (
    <>
     <TaskMenu/>
    <div className='reactflow-wrapper' ref={reactFlowWrapper}>
       
        <ReactFlow 
        nodes={nodes}
        edges={edges}
        onEdgesChange={onEdgeChange}
        onNodesChange={onNodeChange}
        onDragOver={onDragOver}
        onConnect={onConnect}
        onDrop={onDrop}
        edgeTypes={edgeType}
        nodeTypes={nodeTypes}
        snapGrid={snapGrid}
        snapToGrid={true}
        colorMode={theme as ColorMode}
        />
        <Background gap={12} variant={BackgroundVariant.Dots} size={1} />
    </div>
    </>
  )
}

export default DnDFlow 
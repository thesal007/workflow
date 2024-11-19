import { memo } from 'react'
import { NodeCard } from './node-card'
import { NodeProps} from '@xyflow/react';
import { AppNodeData, TaskRegistry } from '../../constant';
import { NodeInput, NodeInputs } from '../node-input'
import { NodeOutput,NodeOutputs } from '../node-output'
const NodeComponent =memo ((props:NodeProps) =>{
    const {id,selected} =props;
    const nodeData =props.data as AppNodeData;
    const {inputs =[],outputs=[]} = TaskRegistry [nodeData.type]
    return (
     <NodeCard nodeId={id} selected={!!selected} type={nodeData.type}>
      <NodeInputs>
        {inputs.map ((input)=>{
            return <NodeInput nodeId={id} key={input.name} input={input} />
        })}
      </NodeInputs>
      <NodeOutputs>
        {outputs.map((output)=>{
          return <NodeOutput nodeId={id} key={output.name} output={output}/>
        })}
      </NodeOutputs>
     </NodeCard>
    )
}) 

export default NodeComponent;
NodeComponent.displayName='NodeComponent'
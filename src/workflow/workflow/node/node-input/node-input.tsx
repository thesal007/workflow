import { Handle, Position } from "@xyflow/react";
import classNames from 'classnames'
import { TaskParam } from "../../constant";
import{ NodeParmField} from "../node-param-field";

const NodeInput:React.FC<{input: TaskParam ; nodeId: string}> = ({input,nodeId})=>{
    return(
        <div className="flex justify-start relative p-4 w-full">
        <NodeParmField input={input} nodeId={nodeId}/>
        <Handle 
        type="target"
        id={input.name}
        position={Position.Left}
        className={classNames('!border-2 !w-3 !h-3 !bg-amber-700')}
        />
        </div>
    )
}
export {NodeInput}
import { Position,Handle } from "@xyflow/react"
import classNames from 'classnames'
import { TaskParam } from "../../constant"
import { NodeParmField } from "../node-param-field"
const NodeOutput :React.FC<{output:TaskParam; nodeId: string}> = ({output,nodeId}) => {

  return (
   <div className="flex flex-start relative p-4 w-full">
    < NodeParmField input={output} nodeId={nodeId}/>
    {!output.hideHandle && (
        <Handle
        type='source'
        id={output.name}
        position={Position.Right}
        className={classNames('!border-2 !w-3 !h-3 !bg-green-600')}
        />
    )}
   </div>
  )
}

export { NodeOutput};
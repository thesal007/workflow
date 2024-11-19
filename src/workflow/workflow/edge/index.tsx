import { BaseEdge,EdgeLabelRenderer, EdgeProps, getSmoothStepPath, useReactFlow } from "@xyflow/react"
import { CloseCircleOutlined } from "@ant-design/icons"

const CustomEdge :React.FC<EdgeProps> = (props) => { 
    const {id,markerEnd,style} =props;
    const [edgePath, labelX,labelY] =getSmoothStepPath(props);
    const {setEdges} =useReactFlow();
  return (
    <>
    <BaseEdge path={edgePath} markerEnd={markerEnd} style={style} />
    <EdgeLabelRenderer>
        <div
        style={{
            position: 'absolute',
            pointerEvents: 'all',
            transform: `translate(-50%,-50%) translate(${labelX}px, ${labelY}px)`,

        }}
        >
            <button 
            onClick={()=> setEdges((edges)=> edges.filter((edge)=> edge.id!=id))}
            className="nodrag nopan"
            aria-label='Delete Edge'
            title="Delete Edge"
            >
                <CloseCircleOutlined className="hover:text-red-600in"/>
            </button>

        </div>
    </EdgeLabelRenderer>
    </>
  )
}

export default CustomEdge
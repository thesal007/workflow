import { AppNode } from "../constant";
import { TaskType } from "../constant";

export const CreateFlowNode =(
    nodeType: TaskType,
    position?:{
        x:number;
        y:number;
    }
):AppNode =>{
    return {
        id: `dndnode_${Date.now()}`,
        type: nodeType,
        dragHandle: '.drag-handle',
        data: {
            type: nodeType,
            inputs: {},
        },
        position: position ?? {x:5 , y:0}
    }
}
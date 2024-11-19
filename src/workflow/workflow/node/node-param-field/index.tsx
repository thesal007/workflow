//render Add Condition
import classNames from "classnames";
import { Button, Modal } from "antd";
import * as Icon from "@ant-design/icons";
import { useCallback, useMemo } from "react";
import { useReactFlow } from "@xyflow/react";
import { useDisclosure } from "../../../hooks/hook";
import {
  AppNode,
  TaskParam,
  TaskParamType,
  TaskRegistry,
} from "../../constant";
import { ConditonForm } from "./condition-form";
interface props {
  input: TaskParam;
  nodeId: string;
}
const NodeParmField: React.FC<props> = (props) => {
  const { input, nodeId } = props;
  const { isOpen, onToggle } = useDisclosure();
  const { updateNodeData, getNode } = useReactFlow();

  //Gets the node with the given nodeId and casts it to the AppNode type.
  const node = getNode(nodeId) as AppNode;

  //Looks up the task definition from TaskRegistry using the node's type.
  const task = TaskRegistry[node.data.type];
  if (!node || !task) {
    return null;
  }

  //Uses useMemo to retrieve the correct icon from the Icon object dynamically based on the task type
  const NewIcon = useMemo(
    () => Icon[task.icon as keyof typeof Icon] as any,
    [task.icon]
  );
  switch (input.type) {
    case TaskParamType.STRING:
      return <>String</>;
    case TaskParamType.BOOLEAN:
      return <pre>{input.label}</pre>;
    case TaskParamType.CONDITION:
      return (
        <>
          <Button block icon={input.icon} type="primary" onClick={onToggle}>
            {input.label}
          </Button>
          <Modal
            width={800}
            open={isOpen}
            footer={null}
            keyboard={false}
            closable={false}
            onCancel={onToggle}
            destroyOnClose
            title={
              <div className="flex items-center justify-between">
                <div className="flex  items-center gap-x-2">
                  {NewIcon && (
                    <div
                      className={classNames(
                        "flex items-center justify-center p-2 m-2 ml-0 mr-0 text-xl",
                        task?.iconClassName
                      )}
                    >
                      <NewIcon />
                    </div>
                  )}
                  <div>
                    <p className="text-lg font-bold">Conditon Properties</p>
                    <p className="text-sm font-normal">
                      If /Else condition direct your flow based on whether the
                      condition you defind are met.
                    </p>
                  </div>
                </div>
                <Button
                  ghost
                  shape="circle"
                  type="primary"
                  onClick={onToggle}
                  icon={<Icon.CloseOutlined className="text-primary " />}
                />
              </div>
            }
          >
            <ConditonForm id={""} name={""} state={""} value={undefined} />
          </Modal>
        </>
      );
    default:
      return (
        <div className="w-full">
          <p>Not implement</p>
        </div>
      );
  }
};

export { NodeParmField };

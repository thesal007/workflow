import React, { useMemo } from "react";
import { useDnD } from "../../context/dnd";
import { TaskType, TaskRegistry } from "../constant";
import * as Icon from "@ant-design/icons";
import classNames from "classnames";
interface Props {
  type: TaskType;
}
const TaskMenuItem: React.FC<Props> = ({ type }) => {
  const [_, setType] = useDnD();
  const currentType = TaskRegistry[type];
  if (!currentType) {
    return null;
  }
  const onDragStart = (event: React.DragEvent, nodeType: TaskType) => {
    setType(nodeType);
    event.dataTransfer.effectAllowed = "move";
  };
  const NewIcon = useMemo(
    () => Icon[currentType.icon as keyof typeof Icon] as any,
    [currentType.icon]
  );
  return (
    <div
      draggable
      className={classNames(
        "border-[1.5px] border-dashed flex rounded gap-x-2 border-gray-200 dark:border-gray-600 cursor-grab"
      )}
      onDragStart={(event) => onDragStart(event, type)}
    >
      {NewIcon && (
        <div
          className={classNames(
            "flex items-center justify-center p-2 mr-0 m-2 text-xl",
            currentType?.iconClassName
          )}
        >
          <NewIcon />
        </div>
      )}
      <div className="flex flex-col">
        <div className="text-md font-bold">{currentType?.label}</div>
        <div className="text-xs text-gray-400">{currentType?.description}</div>
      </div>
    </div>
  );
};

export { TaskMenuItem };

import React from "react";
import { TaskMenuItem } from "./item-task-menu";
import "@xyflow/react/dist/style.css";
import Card from "antd/es/card/Card";
import { TaskType } from "../constant";
const TaskMenu: React.FC = () => {
  return (
    <Card
      classNames={{ body: "flex flex-col !p-2" }}
      className="min-w-[300px] max-w-[300px] border-r border-t0 dark:border-t border-separate p-1 px-2 overflow-auto rounded-none "
    >
      <h1 className="text-base font-semibold uppercase">WORKFLOW ELEMENTS</h1>
      <p className="text-sm font-semibold my-4">Task</p>
      <div className="space-y-2">
        <TaskMenuItem type={TaskType.APPROVAL} />
        <TaskMenuItem type={TaskType.IF_ELSE} />
      </div>
      <h2 className="text-sm font-semibold my-4">Entry Point</h2>
      <div className="space-y-2">
        <TaskMenuItem type={TaskType.APPROVAL} />
        <TaskMenuItem type={TaskType.IF_ELSE} />
        <TaskMenuItem type={TaskType.APPROVAL} />
        <TaskMenuItem type={TaskType.IF_ELSE} />
      </div>
    </Card>
  );
};

export default TaskMenu;

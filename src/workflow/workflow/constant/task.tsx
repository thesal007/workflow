import { PlusOutlined } from "@ant-design/icons";
export enum TaskType {
  IF_ELSE = "IF_ELSE",
  APPROVAL = "APPROVAL",
}
export enum TaskParamType {
  STRING = "string",
  NUMBER = "number",
  BOOLEAN = "boolean",
  BUTTON = "button",
  CONDITION = "condition",
}
export interface TaskParam {
  name: string;
  label: string;
  type: TaskParamType;
  hideHandle?: boolean;
  required?: boolean;
  value?: any;
  [key: string]: any;
}
export const ApprovalTask = {
  type: TaskType.APPROVAL,
  label: "Approval Flow",
  icon: "FileOutlined",
  iconClassName:
    "text-green-500 bg-green-50 dark:bg-green-50 dark:text-white rounded-md",
  description: "Approval or reject the flow",
  inputs: [
    {
      name: "approval-input",
      label: "Approve",
      type: TaskParamType.STRING,
    },
    {
      name: "approval-input",
      label: "Approve",
      type: TaskParamType.STRING,
      hideHandle: true,
    },
  ],
  outputs: [
    {
      name: "approval-true",
      label: "True",
      type: TaskParamType.BOOLEAN,
    },
    {
        name: "approval-fale",
        label: "False",
        type: TaskParamType.BOOLEAN
    }
  ],
};

export const IfElseTask = {
    type: TaskType.IF_ELSE,
    label: 'If / Else Condition',
    icon: 'ForkOutlined',
    iconClassName: 'rotate-90 text-primary bg-primary-50 dark:bg-primary dark:text-white rounded-md',
    description: 'Conditionaly branch the flow',
    isEntryPoint:true,
    inputs:[
        {
            name: 'ifelse-input',
            label: 'Add Condition',
            icon: <PlusOutlined/>,
            type: TaskParamType.CONDITION,
        }
    ],
    outputs:[
        {
            name: 'ifelse-true',
            label: 'True',
            type: TaskParamType.BOOLEAN,
        },
        {
            name: 'ifelse-false',
            label: 'False',
            type: TaskParamType.BOOLEAN,
        }
    ]
}   
export const TaskRegistry={
    IF_ELSE: IfElseTask,
    APPROVAL: ApprovalTask,
}
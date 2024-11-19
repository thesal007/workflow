import { DeleteOutlined } from "@ant-design/icons";
import { Button, Input, Table } from "antd";
import { useFieldArray, useForm } from "react-hook-form";

interface FormProps {
  id: string;
  name: string;
  state: string;
  value: any;
}

const ConditonForm: React.FC<FormProps> = (props) => {
 
  const methods = useForm<any>({
    mode: "onChange",
    reValidateMode: "onChange",
  });

  const { handleSubmit } = methods;
  
  {
    /*
    fields: The current field data.
    append: Function to add new conditions to the array.
    remove: Function to remove a condition from the array.
    */
  }
  const { fields, append, remove } = useFieldArray({
    control: methods.control,
    name: "conditions",
  });

  const onSubmit = (value: any) => {};
  const column = [
    {
      title: "IF (Field Name)",
      dataIndex: "name",
      key: "name",
      width: "30%",
      render: (_: string, __: Record<"id", string>, index: number) => {
        return <Input name={`conditions.${index}.state`} />;
      },
    },
    {
      title: "STATE (Operation)",
      dataIndex: "state",
      key: "state",
      width: "30%",
      render: (_: string, __: Record<"id", string>, index: number) => {
        return <Input name={`conditions.${index}.state`} />;
      },
    },
    {
      title: "VALUE (Field Value)",
      dataIndex: "value",
      key: "value",
      width: "30%",
      render: (_: string, __: Record<"id", string>, index: number) => {
        return <Input name={`conditions.${index}.state`} />;
      },
    },
    {
      title: "REMOVE",
      dataIndex: "remove",
      key: "remove",
      width: "10%",
      render: (_: string, __: Record<"id", string>, index: number) => {
        return (
          <Button
            danger
            icon={<DeleteOutlined />}
            onClick={() => remove(index)}
          />
        );
      },
    },
  ];
  return (
    <div>
      <Table
        size="small"
        columns={column}
        dataSource={fields}
        pagination={false}
        rowKey={(record) => record.id}
        footer={() => {
          return (
            <div className="flex flex-1 justify-end">
              <Button
                type="primary"
                onClick={() => {
                  append({});
                }}
              >
                Add Condition
              </Button>
            </div>
          );
        }}
      />
    </div>
  );
};

export { ConditonForm };

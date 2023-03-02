import { IResourceComponentsProps } from "@pankod/refine-core";
import { Form, useDrawerForm, Input, useSelect, Select } from "@pankod/refine-antd";
import { CreateDrawer } from "components/crud";
import { AppsList } from "./list";

export const AppsCreate: React.FC<IResourceComponentsProps> = () => {
    // const { formProps, saveButtonProps, queryResult } = useForm();
    const { formProps, drawerProps, saveButtonProps } = useDrawerForm({
        action: "create",
    });
    const { selectProps } = useSelect({
        resource: "countries",
        optionLabel: "name",
        optionValue: "id",
    });
    
    return <div>
        <AppsList   />
        <CreateDrawer saveButtonProps={saveButtonProps} drawerProps={drawerProps}>
            <Form {...formProps} layout="vertical">
                <Form.Item
                    label="Code"
                    name={["code"]}
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Name"
                    name={["name"]}
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Pais"
                    name="country"
                >
                    <Select
                        placeholder="Selecione um país"
                        {...selectProps} 
                    />
                </Form.Item>
            </Form>
        </CreateDrawer>
    </div>
};

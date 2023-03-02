import { IResourceComponentsProps } from "@pankod/refine-core";
import { Form, Input, Select, useSelect, useDrawerForm } from "@pankod/refine-antd";
import { AppsList } from "./list";
import { EditDrawer } from "components/crud";

export const AppsEdit: React.FC<IResourceComponentsProps> = () => {

    const { formProps, drawerProps, saveButtonProps, queryResult } = useDrawerForm({
        action: "edit",
        metaData: {
            populate: ["country", "currency"],
        }
    });
    const { selectProps: countrySelectProps} = useSelect({
        resource: "countries",
        optionLabel: "name",
        optionValue: "id",
    });
    const { selectProps: currencySelectProps } = useSelect({
        resource: "currencies",
        optionLabel: "name",
        optionValue: "id",
    });
    
    return <div>
        <AppsList   />
        <EditDrawer saveButtonProps={saveButtonProps} drawerProps={drawerProps}>
            <Form 
                {...formProps} 
                layout="vertical"
            >
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
                    name={["country","id"]}
                >
                    <Select
                        placeholder="Selecione um país"
                        {...countrySelectProps} 
                    />
                </Form.Item>
                <Form.Item
                    label="Moneda"
                    name={["currency","id"]}
                >
                    <Select
                        placeholder="Selecione uma moeda"
                        {...currencySelectProps}
                    />
                </Form.Item>
            </Form>
        </EditDrawer>
    </div>
};

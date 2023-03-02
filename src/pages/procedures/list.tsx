import { IResourceComponentsProps, GetListResponse, BaseRecord } from "@pankod/refine-core";
import {
    useEditableTable,
    Form,
    List,
    Table,
    EditButton,
    Button,
    Space,
    InputNumber,
} from "@pankod/refine-antd"


export const ProceduresList: React.FC<IResourceComponentsProps<GetListResponse<{}>>> = () => {
    const {
        tableProps,
        formProps,
        isEditing,
        setId: setEditId,
        saveButtonProps,
        cancelButtonProps,
        editButtonProps,
    } = useEditableTable()
    return <div>
         <List breadcrumb={false}>
            <Form {...formProps} layout="vertical">
                <Table {...tableProps} rowKey="id"
                    columns={[
                        {
                            title: "Código",
                            dataIndex: "code",
                        },
                        {
                            title: "Nombre",
                            dataIndex: "name",
                        },
                        {
                            title: "Categoría",
                            dataIndex: "category",
                        },
                        {
                            title: "Precio",
                            dataIndex: "price",
                            render: (_, record: any) => {
                                if (isEditing(record.id)) {
                                    return  <Form.Item 
                                        name="price"
                                        noStyle
                                    >
                                            <InputNumber prefix="$" />
                                    </Form.Item>
                                }
                                return record.price
                            }
                        },
                        {
                            dataIndex: "actions",
                            render: (_, record: any) => {
                                if (isEditing(record.id)) {
                                    return <Space.Compact>
                                        <Button {...saveButtonProps} />
                                        <Button {...cancelButtonProps} />
                                    </Space.Compact>
                                }
                                return <Space.Compact>
                                    <EditButton
                                        {...editButtonProps(record.id)}
                                        hideText
                                        size="small"
                                        type="text"
                                    />
                                </Space.Compact>
                            }
                        }
                    ]}
                />
            </Form>
        </List>
    </div>
};

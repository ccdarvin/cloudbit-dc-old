import { IResourceComponentsProps, GetListResponse, BaseRecord } from "@pankod/refine-core"
import { EyeOutlined } from "@ant-design/icons"
import {
    useTable,
    List,
    Table,
    EditButton,
    Button,
} from "@pankod/refine-antd"
export const AppsList: React.FC<IResourceComponentsProps<GetListResponse<{}>>> = () => {
    const { tableProps } = useTable({})
    const host = window.location.host;
    const protocol = window.location.protocol;
    return <div>
         <List breadcrumb={false}>
            <Table {...tableProps} rowKey="id">
                <Table.Column dataIndex="id" title="Id" />
                <Table.Column dataIndex="code" title="Code" />
                <Table.Column dataIndex="name" title="Name" />
                <Table.Column
                    dataIndex="actions"
                    render={(_, record: BaseRecord) => (
                        <Button.Group>
                            <EditButton
                                hideText
                                size="small"
                                type="text"
                                recordItemId={record.id}
                            />
                            <Button 
                                type="text" 
                                size="small"
                                icon={<EyeOutlined />}
                                href={`${protocol}//${record.code}.${host}`}
                            />
                        </Button.Group>
                    )}
                />
            </Table>
        </List>
    </div>
};

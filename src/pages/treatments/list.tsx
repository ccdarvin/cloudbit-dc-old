import { IResourceComponentsProps, GetListResponse, BaseRecord } from "@pankod/refine-core";
import { EditOutlined } from "@ant-design/icons";
import {
    useTable,
    List,
    Table,
    EditButton,
    Space,
    Empty,
    CreateButton
} from "@pankod/refine-antd"


export const TreatmentsList: React.FC<IResourceComponentsProps<GetListResponse<{}>>> = () => {
    const { tableProps, tableQueryResult } = useTable({
        metaData: {
            populate: ["patient"],
        }
    });
    return <div>
        <List 
            breadcrumb={false}
            headerButtons={tableQueryResult?.data?.total? <CreateButton type="primary" />: <></>}
        >
            <Table 
                {...tableProps}
                locale={{
                    emptyText: tableQueryResult?.isLoading? <div style={{minHeight: '50%'}}></div> :
                    <Empty description="No hay pacientes" style={{minHeight: '50%'}}>
                        <CreateButton type="primary" />
                    </Empty>
                }}
                rowKey="id"
                columns={[
                    {
                        title: "Nombre",
                        dataIndex: "name",
                    },
                    {
                        dataIndex: "actions",
                        render: (_, record: BaseRecord) => <Space>
                            <EditButton 
                                hideText
                                size="small"
                                type="text"
                                recordItemId={record.id}
                                icon={<EditOutlined />}
                            />
                        </Space>
                    }
                ]}
            />
        </List>
    </div>;
};

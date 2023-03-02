import { IResourceComponentsProps, GetListResponse } from "@pankod/refine-core";
import {
    useTable,
    List,
    Table,
    EditButton,
    Button,
    CreateButton,
    Empty,
    Tooltip
} from "@pankod/refine-antd"
import dayjs from "dayjs";

export const PatientsList: React.FC<IResourceComponentsProps<GetListResponse<{}>>> = () => {
    const { tableProps, tableQueryResult } = useTable({})
    
    return <div>
        <List 
            breadcrumb={false} 
            headerButtons={tableQueryResult?.data?.total? <CreateButton type="primary" />: <></>}
        >
            <Table 
                {...tableProps} rowKey="id"
                locale={{
                    emptyText: <Empty description="No hay pacientes">
                        <CreateButton type="primary" />
                    </Empty>
                }}
                columns={[
                    {
                        title: "Nombre",
                        dataIndex: "firstName",
                        render: (_, record) => <span>{record.firstName} {record.lastName}</span>
                    },
                    {
                        title: "Correo electrónico",
                        dataIndex: "email",
                    },
                    {
                        title: "Teléfono",
                        dataIndex: "phone",
                    },
                    {
                        title: "edad",
                        dataIndex: "birthDate",
                        render: (_, record) => {
                            if (!record.birthDate) return '-'
                            const birthDate = dayjs(record.birthDate);
                            const today = dayjs();
                            const age = today.diff(birthDate, "year");
                            return  <Tooltip title={birthDate.format("LL")}><span>{age}</span></Tooltip>
                        }
                    },
                    {
                        dataIndex: "actions",
                        render: (_, record) => <Button.Group>
                            <EditButton 
                                type="text"
                                recordItemId={record.id}
                            />
                        </Button.Group>
                    }
                ]}
            >
            </Table>
        </List>
    </div>
};



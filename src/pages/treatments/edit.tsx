import { IResourceComponentsProps } from "@pankod/refine-core";
import { Typography, Card, Space, Divider } from "antd";
import { EditButton, useForm } from "@pankod/refine-antd";
import { Edit } from "components/crud";
import { TreatmentEdit } from "./TreatmentEdit";
import { useState } from "react";

export const TreatmentsEdit: React.FC<IResourceComponentsProps> = () => {

    const { formProps, saveButtonProps, queryResult } = useForm({
        metaData: {
            populate: ["patient", "doctor"],
        }
    });

    const { data } = queryResult?.data || {};
    return <div>
        <Edit saveButtonProps={saveButtonProps}>
            <Card
                bordered={false}
            >
                <Card.Meta
                    title={data?.name}
                    description={<Space split={<Divider type="vertical"/>}>
                        <Space>
                            <Typography.Text strong>Paciente:</Typography.Text>
                            <Typography.Text type="secondary">{data?.patient?.firstName} {data?.patient?.lastName}</Typography.Text>
                        </Space>
                        <Space>
                            <Typography.Text strong>Doctor:</Typography.Text>
                            <Typography.Text type="secondary">{data?.doctor?.firstName} {data?.doctor?.lastName}</Typography.Text>
                        </Space>
                        <Space>
                            <TreatmentEdit />
                        </Space>
                    </Space>}
                />
            </Card>
        </Edit>
    </div>
};

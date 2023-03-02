
import { Form, Input, useSelect, Select, Space } from "@pankod/refine-antd";

export default function TreatmentsForm(
    { formProps} : any
) {
    const { 
        queryResult: patientQueryResult, 
        selectProps: patientSelectProps 
    } = useSelect({
        resource: "dc-patients",
        onSearch: (value) => [
            {
                field: "firstName",
                operator: "contains",
                value,
            },
        ]
    });
    const {
        queryResult: doctorQueryResult,
        selectProps: doctorSelectProps
    } = useSelect({
        resource: "dc-doctors",
        onSearch: (value) => [
            {
                field: "firstName",
                operator: "contains",
                value,
            },
        ]
    });
    return <Form {...formProps} layout="vertical">
    <Form.Item 
        label="Nombre" 
        name={["name"]}
    >
        <Input />
    </Form.Item>
    <Space.Compact block>
        <Form.Item
            label="Paciente"
            name={["patient","id"]}
        >
            <Select
                placeholder="Selecione um paciente"
                {...patientSelectProps}
                options={patientQueryResult?.data?.data?.map((patient: any) => ({
                    label: patient.firstName + " " + patient.lastName,
                    value: patient.id,
                }))}
            />
        </Form.Item>
        <Form.Item
            label="Doctor"
            name={["doctor","id"]}
        >
            <Select
                placeholder="Selecione um doctor"
                {...doctorSelectProps}
                options={doctorQueryResult?.data?.data?.map((doctor: any) => ({
                    label: doctor.firstName + " " + doctor.lastName,
                    value: doctor.id,
                }))}
            />  
        </Form.Item>
    </Space.Compact>
</Form>
}

import { Form, Input, useSelect, Select, DatePicker, Space, Divider } from "@pankod/refine-antd";
import dayjs from "dayjs";

export default function DoctorsForm(
    { formProps} : any
) {
    const { selectProps: countrySelectProps } = useSelect({
        resource: "countries",
        optionLabel: "name",
        optionValue: "id",
    });
    if (formProps.initialValues?.birthDate) {
        formProps.initialValues.birthDate = dayjs(formProps.initialValues.birthDate);
    }
    return <Form {...formProps} layout="vertical">
    <Form.Item label="Nombre" required>
        <Input.Group compact style={{display: "flex"}}>
            <Form.Item
                name={["firstName"]}
                noStyle
                rules={[
                    {
                        required: true,
                    },
                ]}
            >
                <Input placeholder="Nombres"/>
            </Form.Item>
            <Form.Item
                name={["lastName"]}
                noStyle
                rules={[
                    {
                        required: true,
                    },
                ]}
            >
                <Input placeholder="Apellidos"/>
            </Form.Item>
        </Input.Group>
    </Form.Item>
    <Space.Compact block>
        <Form.Item
            label="Fecha de nacimiento"
            name={["birthDate"]}
            style={{width: "50%"}}
        >
            <DatePicker style={{width: '100%'}} />
        </Form.Item>
        <Form.Item
            label="Sexo"
            name={['sex']}
            style={{width: "50%"}}
        >
            <Select placeholder="Seleccionar" options={[
                {label: "Masculino", value: "M"},
                {label: "Femenino", value: "F"},
            ]}/>
        </Form.Item>
    </Space.Compact>
    <Form.Item
        label="Documento de identidad"
        name={["idCardNumber"]}
    >
        <Input />
    </Form.Item>
    <Space.Compact block>
        <Form.Item
            label="Correo electrónico"
            name={["email"]}
            rules={[{ type: 'email' }]}
            style={{width: "60%"}}
        >
            <Input />
        </Form.Item>
        <Form.Item
            label="Teléfono"
            name={["phone"]}
            style={{width: "40%"}}
        >
            <Input />
        </Form.Item>
    </Space.Compact>
    <Divider>Direción</Divider>
    <Form.Item
        label="Pais"
        name={['country', 'id']}
    >
        <Select
            placeholder="Selecione um país"
            {...countrySelectProps} 
        />
    </Form.Item>
    <Space.Compact block>
        <Form.Item
            label="Estado"
            name={["state"]}
            style={{width: "50%"}}
        >
            <Input />
        </Form.Item>
        <Form.Item
            label="Ciudad"
            name={["city"]}
            style={{width: "50%"}}
        >
            <Input />
        </Form.Item>
    </Space.Compact>
    <Form.Item 
        label="Dirección"
        name={["address"]}
    >
        <Input.TextArea />
    </Form.Item>
</Form>
}
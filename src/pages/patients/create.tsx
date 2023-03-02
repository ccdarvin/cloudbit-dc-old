import { IResourceComponentsProps } from "@pankod/refine-core";
import { useDrawerForm } from "@pankod/refine-antd";
import { CreateDrawer } from "components/crud";
import { PatientsList } from "./list";
import PatientsForm from "./PatientsForm";

export const PatientsCreate: React.FC<IResourceComponentsProps> = () => {
    const { formProps, drawerProps, saveButtonProps } = useDrawerForm({
        action: "create",
    });
    
    return <div>
        <PatientsList   />
        <CreateDrawer saveButtonProps={saveButtonProps} drawerProps={drawerProps}>
            <PatientsForm formProps={formProps}/>
        </CreateDrawer>
    </div>
};

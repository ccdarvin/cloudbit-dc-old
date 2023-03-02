import { IResourceComponentsProps } from "@pankod/refine-core";
import { useDrawerForm } from "@pankod/refine-antd";
import { EditDrawer } from "components/crud";
import PatientsForm from "./PatientsForm";
import { PatientsList } from "./list";

export const PatientsEdit: React.FC<IResourceComponentsProps> = () => {
    const { formProps, drawerProps, saveButtonProps, queryResult } = useDrawerForm({
        action: "edit",
        metaData: {
            populate: ["country"],
        }
    });
    
    return <div>
        <PatientsList  />
        <EditDrawer saveButtonProps={saveButtonProps} drawerProps={{...drawerProps}}>
            <PatientsForm formProps={formProps} />
        </EditDrawer>
    </div>
};

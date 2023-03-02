import { IResourceComponentsProps } from "@pankod/refine-core";
import { useDrawerForm } from "@pankod/refine-antd";
import { CreateDrawer } from "components/crud";
import { DoctorsList } from "./list";
import DoctorsForm from "./DoctorsForm";


export const DoctorsCreate: React.FC<IResourceComponentsProps> = () => {
    const { formProps, drawerProps, saveButtonProps } = useDrawerForm({
        action: "create",
    });
    return <div>
        <DoctorsList   />
        <CreateDrawer saveButtonProps={saveButtonProps} drawerProps={drawerProps}>
            <DoctorsForm formProps={formProps}/>
        </CreateDrawer>
    </div>
};

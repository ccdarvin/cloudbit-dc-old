import { IResourceComponentsProps } from "@pankod/refine-core";
import { useDrawerForm } from "@pankod/refine-antd";
import { EditDrawer } from "components/crud";
import DoctorsForm from "./DoctorsForm";
import { DoctorsList } from "./list";


export const DoctorsEdit: React.FC<IResourceComponentsProps> = () => {
    const { formProps, drawerProps, saveButtonProps, queryResult } = useDrawerForm({
        action: "edit",
        metaData: {
            populate: ["country"],
        }
    });

    return <div>
        <DoctorsList  />
        <EditDrawer saveButtonProps={saveButtonProps} drawerProps={{...drawerProps}}>
            <DoctorsForm formProps={formProps} />
        </EditDrawer>
    </div>
};

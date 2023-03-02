

import { IResourceComponentsProps } from "@pankod/refine-core";
import { EditButton, useDrawerForm } from "@pankod/refine-antd";
import { EditDrawer } from "components/crud";
import TreatmentsForm from "./TreatmentsForm";
import { useState } from "react";


export const TreatmentEdit: React.FC<IResourceComponentsProps> = () => {
    const [openEditTreatment, setOpenEditTreatment] = useState(false);

    const { formProps, drawerProps, saveButtonProps } = useDrawerForm({
        action: "edit",
        redirect: false,
        onMutationSuccess: () => {
            setOpenEditTreatment(false);
        },
        metaData: {
            populate: ["patient", "doctor"],
        }
    });
    return <div>
        <EditButton 
            onClick={() => setOpenEditTreatment(true)}
        />
        <EditDrawer
            open={openEditTreatment}
            onClose={() => setOpenEditTreatment(false)}
            saveButtonProps={saveButtonProps} 
            drawerProps={{...drawerProps}}
        >
            <TreatmentsForm formProps={formProps} />
        </EditDrawer>
    </div> 
}

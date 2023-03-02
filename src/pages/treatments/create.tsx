import { IResourceComponentsProps } from "@pankod/refine-core";
import { useDrawerForm } from "@pankod/refine-antd";
import { CreateDrawer } from "components/crud";
import { TreatmentsList } from "./list";
import TreatmentsForm from "./TreatmentsForm";

export const TreatmentsCreate: React.FC<IResourceComponentsProps> = () => {
    const { formProps, drawerProps, saveButtonProps } = useDrawerForm({
        action: "create",
    });
    return <div>
        <TreatmentsList   />
        <CreateDrawer saveButtonProps={saveButtonProps} drawerProps={drawerProps}>
            <TreatmentsForm formProps={formProps}/>
        </CreateDrawer>
    </div>
};

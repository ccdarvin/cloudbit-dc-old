import React from "react";
import { Space, Spin, Drawer } from "antd";
import {
    useNavigation,
    useResourceWithRoute,
    useRouterContext,
    useTranslate,
    userFriendlyResourceName,
    ResourceRouterParams,
} from "@pankod/refine-core";

import { SaveButton } from "@pankod/refine-antd";
import { CreateProps } from "@pankod/refine-antd";

/**
 * `<Create>` provides us a layout to display the page.
 * It does not contain any logic but adds extra functionalities like action buttons and giving titles to the page.
 *
 * @see {@link https://refine.dev/docs/ui-frameworks/antd/components/basic-views/create} for more details.
 */

interface ICreateDrawerProps extends CreateProps {
    drawerProps?: any;
}

export const CreateDrawer: React.FC<ICreateDrawerProps > = ({
    title,
    children,
    resource: resourceFromProps,
    isLoading = false,
    breadcrumb: breadcrumbFromProps,
    //wrapperProps,
    headerProps,
    contentProps,
    headerButtonProps,
    headerButtons,
    footerButtonProps,
    footerButtons,
    goBack: goBackFromProps=false,
    saveButtonProps,
    drawerProps
}) => {
    const { goBack } = useNavigation();
    const translate = useTranslate();

    const { useParams } = useRouterContext();

    const { resource: routeResourceName } =
        useParams<ResourceRouterParams>();
    const resourceWithRoute = useResourceWithRoute();

    const resource = resourceWithRoute(resourceFromProps ?? routeResourceName);

    const defaultFooterButtons = (
        <>
            <SaveButton
                {...(isLoading ? { disabled: true } : {})}
                {...saveButtonProps}
                htmlType="submit"
            />
        </>
    );

    return (
        <Drawer 
            mask={false}
            size="large"
            onClose={() => {goBack()}}
            open
            title={
                title ??
                translate(
                    `${resource.name}.titles.create`,
                    `Create ${userFriendlyResourceName(
                        resource.label ?? resource.name,
                        "singular",
                    )}`,
                )
            }
            footer={[
                <Space
                    key="action-buttons"
                    style={{ float: "right", marginRight: 24 }}
                    {...(footerButtonProps ?? {})}
                >
                    {footerButtons
                        ? typeof footerButtons === "function"
                            ? footerButtons({
                                  defaultButtons:
                                      defaultFooterButtons,
                              })
                            : footerButtons
                        : defaultFooterButtons}
                </Space>,
            ]}
            extra={
                <Space wrap {...(headerButtonProps ?? {})}>
                    {headerButtons
                        ? typeof headerButtons === "function"
                            ? headerButtons({
                                  defaultButtons: null,
                              })
                            : headerButtons
                        : null}
                </Space>
            }
        >
            <Spin spinning={isLoading}>
                <div {...(contentProps ?? {})}>
                    {children}
                </div>
            </Spin>
        </Drawer>
    );
};

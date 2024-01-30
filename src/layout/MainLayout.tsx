import { Layout } from "antd";
import { HeaderLayout } from "./HeaderLayout";
import { ContentLayout } from "./ContentLayout";

const layoutStyle = {
    overflow: 'hidden',
    height: "100vh"
};


export const MainLayout = () => {
    return (
        <Layout style={layoutStyle}>
            <HeaderLayout />
            <ContentLayout />
        </Layout>
    )
}
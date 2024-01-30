import { Layout } from "antd"
import { Outlet, useLocation } from "react-router-dom";
import AllCats from "../screens/AllCats";

const contentStyle: React.CSSProperties = {
    textAlign: 'center',
    backgroundColor: '#FFFFFF',
    height: "100%",
    overflow: "auto"
};

export const ContentLayout = () => {

    const { pathname } = useLocation();

    return (
        <Layout.Content style={contentStyle}>
            {pathname === "/frontend-challenge" || pathname === "/frontend-challenge/" ? <AllCats /> : <Outlet />}
        </Layout.Content>
    )
}
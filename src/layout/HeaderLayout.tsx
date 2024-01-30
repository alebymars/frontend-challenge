import { Layout } from "antd";
import { Link, useLocation } from "react-router-dom";

const headerStyle: React.CSSProperties = {
    backgroundColor: '#2196F3',
};


export const HeaderLayout = () => {

    const { pathname } = useLocation();

    return (
        <Layout.Header style={headerStyle}>
            <Link
                style={{
                    flex: 1,
                    backgroundColor: pathname === "/" ? "#1E88E5" : "transparent",
                    padding: 25,
                    color: "#ffffff",
                    fontFamily: "Roboto",
                    fontSize: 14,
                    fontWeight: "400"
                }}
                to={`/`}
            >
                Все котики
            </Link>
            <Link
                style={{
                    flex: 1,
                    backgroundColor: pathname === "/favorite" ? "#1E88E5" : "transparent",
                    padding: 25,
                    color: "#ffffff",
                    fontFamily: "Roboto",
                    fontSize: 14,
                    fontWeight: "400"
                }}
                to={`favorite`}
            >
                Любимые котики
            </Link>
        </Layout.Header>
    )
}
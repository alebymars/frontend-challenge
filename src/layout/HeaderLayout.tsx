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
                    backgroundColor: pathname === "/frontend-challenge" || pathname === "/frontend-challenge/" ? "#1E88E5" : "transparent",
                    padding: 25,
                    color: pathname === "/frontend-challenge" || pathname === "/frontend-challenge/" ? "#ffffff" : "rgba(255, 255, 255, 0.70)",
                    fontFamily: "Roboto",
                    fontSize: 14,
                    fontWeight: "400",
                    letterSpacing: 0.25,
                    wordWrap: "break-word",
                }}
                to={`/frontend-challenge`}
            >
                Все котики
            </Link>
            <Link
                style={{
                    backgroundColor: pathname === "/frontend-challenge/favorite" || pathname === "/frontend-challenge/favorite/" ? "#1E88E5" : "transparent",
                    padding: 25,
                    color: pathname === "/frontend-challenge/favorite" || pathname === "/frontend-challenge/favorite/" ? "#ffffff" : "rgba(255, 255, 255, 0.70)",
                    fontFamily: "Roboto",
                    fontSize: 14,
                    fontWeight: "400",
                    letterSpacing: 0.25,
                    wordWrap: "break-word"
                }}
                to={`/frontend-challenge/favorite`}
            >
                Любимые котики
            </Link>
        </Layout.Header >
    )
}
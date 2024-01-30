import { Button, Result } from "antd";
import { ResultStatusType } from "antd/es/result";
import { useRouteError } from "react-router-dom";

interface ErrorRoute {
    data: string;
    error: {
        message: string;
        stack: string;
    };
    status: ResultStatusType;
    statusText: string;
}

export default function ErrorPage() {

    const error = useRouteError() as ErrorRoute;

    return (
        <Result
            status={error.status}
            title={error.status}
            subTitle={error.statusText}
            extra={[
                <Button key={"main"} type="primary" href="/frontend-challenge">
                    На главную
                </Button>,
            ]}
        />
    );
}
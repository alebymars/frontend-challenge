import { MouseEventHandler } from 'react';
import { Button } from 'antd';
import { ReloadOutlined } from '@ant-design/icons';

interface Props {
    onClick: MouseEventHandler<HTMLElement> | undefined;
    title: string;
    isLoading: boolean;
}

const MyButton = (props: Props) => {
    return (
        <Button style={{ margin: 50 }} type="primary" onClick={props.onClick} icon={<ReloadOutlined />}
            loading={props.isLoading}>{props.title}</Button>
    )
};

export default MyButton;

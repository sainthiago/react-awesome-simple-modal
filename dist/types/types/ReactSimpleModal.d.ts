/// <reference types="react" />
export interface ReactSimpleModalProps extends React.HTMLAttributes<HTMLDivElement> {
    extraTopElement?: JSX.Element;
    open: boolean;
    onClose: () => void;
}

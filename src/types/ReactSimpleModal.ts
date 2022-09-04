export interface ReactSimpleModalProps
  extends React.HTMLAttributes<HTMLDivElement> {
  open: boolean;
  onClose: () => void;
  closeIcon?: JSX.Element
}

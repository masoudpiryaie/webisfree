import Button from "@mui/material/Button";
import type { ButtonProps } from "@mui/material/Button";

type AppButtonProps = ButtonProps;

export default function AppButton({ children, ...props }: AppButtonProps) {
  return (
    <Button variant="contained" color="primary" {...props}>
      {children}
    </Button>
  );
}

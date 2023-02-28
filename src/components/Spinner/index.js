import Spinner from "react-bootstrap/Spinner";
import "./spinner.css";
export default function SpinnerLoading({ variant }) {
  return (
    <div className="parent-spinner">
      <Spinner className="spinner" animation="border" variant={variant} />
    </div>
  );
}


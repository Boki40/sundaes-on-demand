import Alert from "react-bootstrap/Alert";

export default function AlertBanner({
  message = "An unexcepted error has occurred. Please try again later.",
  variant = "danger",
}) {
  return <Alert variant={variant}>{message}</Alert>;
}

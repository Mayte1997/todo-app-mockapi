import Alert from 'react-bootstrap/Alert';
// Sends an alert message when submitting form.
export default function AlertMessage({ message }) {
  return <Alert variant="info">{message}</Alert>;
}

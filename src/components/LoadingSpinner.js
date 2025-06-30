import Spinner from 'react-bootstrap/Spinner';
// Creates a loading message when fetching data
export default function LoadingSpinner() {
  return (
    <div className="text-center my-3">
      <Spinner animation="border" role="status" />
      <div>Loading...</div>
    </div>
  );
}

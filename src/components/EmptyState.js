// This will show if there are no task available
export default function EmptyState({ message = "No tasks available." }) {
  return <p className="text-center text-muted">{message}</p>;
}

export function FieldError({ messages }: { messages?: string[] }) {
  if (!messages?.length) return null;
  return <p className="mt-2 text-sm font-medium text-red-700">{messages[0]}</p>;
}

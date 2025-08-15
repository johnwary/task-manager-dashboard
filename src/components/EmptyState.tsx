interface Props {
  message?: string;
}

export const EmptyState = ({ message = 'No tasks found.' }: Props) => {
  return (
    <div className="text-center text-gray-500 mt-10 text-sm" role="alert">
      {message}
    </div>
  );
};

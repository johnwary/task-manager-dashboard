import { type ReactNode } from 'react';

interface TaskCardProps {
  children: ReactNode;
}

export const TaskCard = ({ children }: TaskCardProps) => {
  return (
    <div className="border p-4 rounded shadow-sm mb-2 bg-white">{children}</div>
  );
};

TaskCard.Header = ({ children }: { children: ReactNode }) => {
  return <div className="font-bold text-lg mb-2">{children}</div>;
};

TaskCard.Body = ({ children }: { children: ReactNode }) => {
  return <div className="text-sm text-gray-700">{children}</div>;
};

TaskCard.Actions = ({ children }: { children: ReactNode }) => {
  return <div className="mt-3 flex gap-2">{children}</div>;
};

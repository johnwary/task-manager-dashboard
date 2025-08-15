import type { ComponentType } from 'react';

interface WithLoadingProps {
  isLoading: boolean;
}

export function withLoading<T extends object>(
  WrappedComponent: ComponentType<T>
) {
  return (props: T & WithLoadingProps) => {
    const { isLoading, ...rest } = props;

    if (isLoading) {
      return (
        <div className="text-center py-4 text-sm text-gray-500">Loading...</div>
      );
    }

    return <WrappedComponent {...(rest as T)} />;
  };
}

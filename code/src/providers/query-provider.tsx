"use client";

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import {JSX, ReactNode, useState} from 'react'

/**
 * A React component that provides a QueryClient context for managing server state
 * within a React application, using React Query features.
 *
 * @param {Object} props The prop object.
 * @param {ReactNode} props.children React components or elements to be wrapped by the QueryClientProvider.
 * @return {JSX.Element} The QueryClientProvider component with the provided `children` wrapped,
 *         along with React Query DevTools for debugging purposes.
 */
export function QueryProvider({ children }: { children: ReactNode }): JSX.Element {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 60 * 1000,
          },
        },
      })
  );

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}
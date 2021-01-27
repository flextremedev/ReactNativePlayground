import * as React from 'react';
import {renderHook} from '@testing-library/react-hooks';
import {QueryClient, QueryClientProvider, useQuery} from 'react-query';

function useCustomHook() {
  const {data} = useQuery('customHook', () => 'Hello');
  return data;
}

const queryClient = new QueryClient();
const wrapper: React.FC = ({children}) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);
test('', () => {
  const {result} = renderHook(() => useCustomHook(), {wrapper});

  expect(result.current).toEqual('Hello');
});

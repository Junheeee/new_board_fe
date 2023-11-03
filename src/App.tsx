import FormContainer from './containers/board/FormContainer';
import ListContainer from './containers/board/ListContainer';
import Layout from './layouts/Layout';
import Container from 'react-bootstrap/Container';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import DetailContainer from './containers/board/DetailContainer';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, // 윈도우가 다시 포커스되었을때 데이터를 호출할 것인지
      retry: 0 // API 요청 실패시 재시도 하는 옵션 (설정값 만큼 재시도)
    }
  }
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Layout>
          <Container className='my-5'>
            <Routes>
              <Route path='/' element={<ListContainer />} />
              <Route path='/board/create' element={<FormContainer />} />
              <Route path='/board/detail/:no' element={<DetailContainer />} />
            </Routes>
          </Container>
        </Layout>
        <ReactQueryDevtools initialIsOpen={false} />
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;

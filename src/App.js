import { QueryClient, QueryClientProvider } from 'react-query';
import { RecoilRoot } from 'recoil';
import Router from './Shared/Router';
import Swal from 'sweetalert2';

function App() {
  const queryClient = new QueryClient();
  const Swals = Swal.fire({
    title: '생활행동강령',
    html: '첫째, 분대장을 제외한 병 상호간에는 명령이나 지시, 간섭을 금지한다. <br><br> 둘째, 어떠한 경우에도 구타, 가혹행위 및 집단 따돌림을 금지한다. <br><br> 셋째, 폭언, 욕설, 인격모독 등 일체의 언어폭력을 금지한다. <br><br>넷째, 언어적,신체적 성희롱, 성추행, 성폭행 등 성 관련 법규 위반행위를 금지한다.',
    confirmButtonText: '이상 점호 끝',
    //   showConfirmButton: false,
  });

  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <Router />
      </RecoilRoot>
    </QueryClientProvider>
  );
}

export default App;

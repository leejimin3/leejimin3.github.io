import { IProject } from '../component/project/IProject';

const project: IProject.Payload = {
  disable: false,
    list: [
    {
        title: '쿼터뷰 PVP 액션 게임 개발 [Unreal Engine]',
        startedAt: '2024-03',
        endedAt: '2014-06',
        where: 'UNSEEN[Smilegate x EpicGamesKorea]',
        descriptions: [
            {
                content:
                    'Unreal Engine5 및 C++를 사용한 게임 개발. 패키징 완료 후 시연 진행',
            },
            {
                content:
                    'GAS시스템을 사용하여 전반적인 게임 로직 구성',
            },
            {
                content:
                    '언리얼 네트워크 및 EOS를 사용한 리슨 서버 환경 구성',
            },
            {
                content:
                    '멀티플레이 인벤토리 컴포넌트 및 UI 구성',
            },
            {
                content:
                    'GitFlow를 사용하여 기능 별로 브랜치 분리. 구조적인 형상 관리 환경 형성',
            },
        ],
    },
    {
        title: '버추얼 스튜디오 플랫폼 연동 솔루션 개발 [Unreal Engine]',
        startedAt: '2023-04',
        endedAt: '2024-01',
        where: '백스포트(Vaxport)',
        descriptions: [
            {
                content:
                    '개발 철수 위기였던 프로젝트에 긴급 투입. 연구 감사 통과 및 프로젝트 완료하여 약 n억원의 연구비 획득',
            },
            {
                content:
                    '언리얼 내부 플러그인 및 서드 파티 플러그인의 코드를 분석 및 확장 담당',
                weight: 'MEDIUM',
                descriptions: [
                    { content: '"MultiEdit" 플러그인 - 분석 및 확장을 통해 일부의 자동화 구현' },
                    { content: '"DMX" 플러그인 - DMX 컨버터를 이용하여 레벨 내의 조명과 실제 조명 동기화' },
                    { content: '"Stable Diffusion" 플러그인 - 서드 파티 플러그인 분석 및 확장. AI로 생성 및 의존된 인스턴스의 Material로 자동 적용' },
                ],
            },
            {
                content:
                    '영어권 외국 시니어 개발자와 협업 진행',
            },
        ],
    },
    {
      title: '체험형 전시 체험 공간 실감 컨텐츠 제작 [Unreal Engine]',
      startedAt: '2023-05',
      endedAt: '2023-12',
      where: '백스포트(Vaxport)',
      descriptions: [
        {
          content:
            '속초의 실감컨텐츠 전시관 "뮤지엄엑스"에 프러젝트 전시 및 유지보수',
          },
        {
          content:
            '웹앱 개발자 및 서버 개발자와 협업하여 모바일에서 오브젝트를 생성하고 조작하는 환경 구성',
            weight: 'MEDIUM',
            descriptions: [
                { content: '서버와의 소켓통신 환경 구성. 프로토콜을 통해 모바일에서 오브젝트 조작 및 기능 작동' },
                { content: 'RestAPI를 사용한 HTTP통신을 통해 사용자가 그린 이미지 데이터를 수신. 오브젝트의 DynamicMaterialIntance에 적용' },
            ],
        },
        {
          content:
            '언리얼 플러그인을 분석 및 프로젝트에 적용하여 대형 타원형 스크린에 화면을 정상적으로 출력',
          weight: 'MEDIUM',
          descriptions: [
            { content: '"SwitchBoard" 플러그인 - 여러대의 PC를 노드로 연결. 다량의 PC의 화면이 병합된 환경 구성'},
            { content: '"nDisplay" 플러그인 - 오브젝트 움직임 동기화. 굴곡진 스크린에 화면 정상 출력' },
          ],
        },
      ],
    },
    {
        title: '게임잼 참여 및 불릿 헤븐 게임 제작 [Unity]',
        startedAt: '2023-12',
        endedAt: '2023-12',
        where: '"뒤끝"게임잼(BackEnd)',
        descriptions: [
            {
                content:
                    '게임의 데이터를 관리하는 매니저 환경 구성 담당',
            },
            {
                content:
                    '기획자와 협업하기 편한 환경 구성',
                weight: 'MEDIUM',
                descriptions: [
                    { content: 'CSV를 통해 불러온 데이터를 사용한 ScriptableObject 제작' },
                    { content: '불러온 데이터를 Linq를 사용한 데이터 필터링' },
                ],
            },
            {
                content: '컬렉션을 사용한 컴포넌트 형식의 ObjectPool 개발',
            },
        ],
    },
  ],
};

export default project;

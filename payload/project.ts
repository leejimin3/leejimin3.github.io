import { IProject } from '../component/project/IProject';

const project: IProject.Payload = {
  disable: false,
  list: [
    {
      title: '쿼터뷰 PVP 액션 게임 개발 [Unreal Engine5]',
      startedAt: '2024-03',
      endedAt: '2024-06',
      where: 'UNSEEN[Smilegate x EpicGamesKorea]',
      descriptions: [
        {
          content: 'Unreal Engine5 및 C++를 사용한 게임 개발. 패키징 완료 후 시연 진행',
        },
        {
          content: 'GAS Framework을 사용하여 전반적인 게임 로직 구성',
        },
        {
          content: '언리얼 네트워크 및 EOS를 사용한 Listen Server 환경 구성',
        },
        {
          content: '멀티플레이 인벤토리 컴포넌트 및 UI 구성',
        },
        {
          content: 'GitFlow를 사용하여 기능 별로 브랜치 분리. 구조적인 형상 관리 환경 형성',
        },
      ],
    },
    {
      title: '버추얼 스튜디오 플랫폼 연동 솔루션 개발 [Unreal Engine5]',
      startedAt: '2023-04',
      endedAt: '2024-01',
      where: '백스포트(Vaxport)',
      descriptions: [
        {
          content:
            '개발 철수 직전 프로젝트에 투입. 성공적으로 연구 감사 통과 및 프로젝트 종료.',
        },
        {
          content: '언리얼 내부 플러그인 및 서드 파티 플러그인의 코드를 분석 및 확장 담당',
          weight: 'MEDIUM',
          descriptions: [
            { content: '"MultiEdit" 플러그인 - 분석 및 확장을 통해 기능 일부의 자동화 구현' },
            { content: '"DMX" 플러그인 - DMX 컨버터를 이용하여 레벨 내의 조명과 실제 조명 동기화' },
            {
              content:
                '"Stable Diffusion" 플러그인 - 서드 파티 플러그인 분석 및 확장. AI로 생성 및 의존된 인스턴스의 Material로 자동 적용',
            },
          ],
        },
        {
          content: '영어권 외국 시니어 개발자와 협업 진행',
        },
      ],
    },
    {
      title: '체험형 전시 공간 실감 콘텐츠 제작 [Unreal Engine5]',
      startedAt: '2023-05',
      endedAt: '2023-12',
      where: '백스포트(Vaxport)',
      descriptions: [
        {
          content: '속초의 실감 콘텐츠 전시관 "뮤지엄엑스"의 프로젝트 전시 및 유지보수',
        },
        {
          content:
            '웹앱 개발자 및 서버 개발자와 협업하여 모바일에서 오브젝트를 생성하고 조작하는 환경 구성',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                '서버와 IO소켓통신 환경 구축. protocol을 통해 모바일에서 오브젝트 조작 및 기능 작동',
            },
            {
              content:
                'RestAPI를 사용한 HTTP 통신을 통해 사용자의 이미지 데이터를 수신. 오브젝트의 DynamicMaterialIntance에 Texture 적용',
            },
          ],
        },
        {
          content:
            '언리얼 플러그인을 분석 및 프로젝트에 적용하여 대형 타원 스크린에 화면을 정상적으로 출력',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                '"SwitchBoard" 플러그인 - 여러 대의 PC를 노드로 연결. 다량의 PC의 화면이 병합된 환경 구성',
            },
            {
              content:
                '"nDisplay" 플러그인 - 오브젝트 움직임 동기화. 굴곡진 스크린에 화면 정상 출력',
            },
          ],
        },
      ],
    },
    {
      title: '게임잼 참여 및 불릿 헤븐 게임 제작 [Unity]',
      startedAt: '2023-12',
      endedAt: '2023-12',
      where: '"뒤끝" 게임잼(BackEnd)',
      descriptions: [
        {
          content: '게임의 데이터를 관리하는 매니저 환경 구성 담당',
        },
        {
          content: '기획자와 협업하기 편한 환경 구성',
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
    {
      title: '슈퍼센트 게임 개발 아카데미 프로젝트 [Unity]',
      startedAt: '2023-01',
      endedAt: '2023-02',
      where: '슈퍼센트(Supercent)',
      descriptions: [
        {
          content: '유니티 및 C# 수업을 통해 CS 지식 학습',
        },
        {
          content: '5가지의 하이퍼 캐주얼 게임 프로젝트 기획 및 구현',
        },
      ],
    },
    {
      title: '3D 퍼즐 어드벤처 게임 제작 [Unreal Engine4]',
      startedAt: '2022-03',
      endedAt: '2022-06',
      where: '스마일게이트(Smilegate)',
      descriptions: [
        {
          content: 'BT를 사용한 AI 구현',
        },
        {
          content: 'Destructable Mesh를 사용한 오브젝트 구현. 데미지를 받을 시 붕괴',
        },
        {
          content: '소켓 및 WeaponObject를 사용한 무기 스왑 시스템 구현',
        },
      ],
    },

    {
      title: '빈동 배열 총기 시스템 [Unreal Engine5]',
      startedAt: '2022-02',
      endedAt: '2022-05',
      where: '졸업 작품 프로젝트(AYU)',
      descriptions: [
        {
          content:
            '기존 두 가지의 FPS 총기 반동 방식의 장점을 융합하여 반동 배열 중 랜덤한 반동이 발동하는 기능 구현',
        },
        {
          content:
            'Curve Blueprint를 사용한 반동으로 기획자가 데이터를 통해 쉽게 반동을 만들 수 있는 환경 구성',
        },
      ],
    },
  ],
};

export default project;

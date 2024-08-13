import { IExperience } from '../component/experience/IExperience';

const experience: IExperience.Payload = {
  disable: false,
  disableTotalPeriod: false,
  list: [
    {
      title: '백스포트 [(전)플랜아이]',
      position: '언리얼엔진 프로그래머',
      startedAt: '2023-04',
      endedAt: '2024-01',
      descriptions: [
        '사내 IITP 연구 개발 관련 언리얼 프로젝트 담당.',
        '실감형 체험형 전시관 "속초 뮤지엄 엑스"의 초기 콘텐츠 제작 및 유지보수',
        '기존 서비스 중인 사내 프로젝트 유지보수[Unreal, Unity, AWS]',
        '엔진 플러그인 및 서드 파티 플러그인 코드 분석 및 기능 확장',
      ],
      skillKeywords: [
        'C++',
        'Unreal Engine',
        'Github',
        'nDisplay',
        'SwitchBoard',
        'DMX',
        'UnrealMultiEdit',
        'StableDiffusion',
      ],
    },
    {
      title: '엔토닉 크리에이티브',
      position: '언리얼엔진 프로그래머',
      startedAt: '2022-06',
      endedAt: '2022-07',
      descriptions: [
        'Camera360v2를 사용하여 3면의 화면이 겹치는 부분의 왜곡 화면 최적화',
        '플러그인 개발자와 연락을 통해 플러그인 사용 관련 문제 해결',
      ],
      skillKeywords: ['C++', 'Unreal Engine', 'SVN', 'Camera360v2'],
    },
  ],
};

export default experience;

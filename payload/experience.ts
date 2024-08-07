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
        '사내 IITP 연구 개발 관련 언리얼 프로젝트 담당. 연구 감사 통과 및 프로젝트 완료하여 약 n억원의 수익 창출',
        '실감형 체험형 전시관 "속초 뮤지엄 엑스"의 초기 콘텐츠 제작 및 유지보수',
        '기존 서비스 중인 사내 프로젝트 유지보수[Unity, AWS]',  
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
        '외부 플러그인 연구 및 기능 확장',
        '시네마틱 영상 제작을 위한 콘텐츠 프로그래밍',
      ],
      skillKeywords: ['C++', 'Unreal Engine', 'SVN', 'Camera360v2'],
    },
  ],
};

export default experience;

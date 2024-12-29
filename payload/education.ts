import { IEducation } from '../component/education/IEducation';

const education: IEducation.Payload = {
  disable: true,

  list: [
    {
      title: '안양대학교',
      subTitle: '컴퓨터공학과 졸업 (학점 : [3.7 / 4.5])',
      startedAt: '2017-03',
      endedAt: '2023-06',
    },
    {
      title: '부평고등학교',
      subTitle: '자연계 졸업',
      startedAt: '2014-03',
      endedAt: '2016-12',
    },
  ],
};

export default education;

import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: true,

  contents: [
    '게임 개발자로서의 다양한 활동과 경험을 가지고 있습니다. Unreal Engine(C++) 및 유니티(C# script)를 주 엔진으로 사용하며 객체지향적이고 유지보수성이 높은 코드를 작성하려고 노력하고 있습니다.',
    '대외활동이나 게임잼에 참여하여 협업하는 것을 즐깁니다. 리더 혹은 팀원의 입장이 되어 하나의 파트를 맡아서 개발하는 것은 멋진 경험이라고 생각합니다. 팀원 간의 갈등이 있을 때에는 "존중과 배움"이라는 자신만의 해결 방법을 통해 많은 갈등을 해결하고 프로젝트를 좋은 방향으로 이끌었습니다.',
    '게임 개발이라는 것은 다양한 파트의 직군들이 각자의 역량을 꽃피워 하나의 멋진 예술 작품을 만드는 것이라고 생각합니다. 예술 작품을 만들기 위해 항상 적극적인 의사소통 능력과 문제 해결 능력을 기르고, 책이나 인사이트를 학습하며 개발자적인 진화를 멈추지 않고 있습니다.',
  ],
  sign: 'Jimin',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;

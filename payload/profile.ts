import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faReadme } from '@fortawesome/free-brands-svg-icons';

import { faBell } from '@fortawesome/free-regular-svg-icons';
import { IProfile } from '../component/profile/IProfile';
import image from '../asset/ProfileImage.jpg';

const profile: IProfile.Payload = {
  disable: false,

  // image: 'https://resume.yowu.dev/static/image/profile_2019.png',
  image,
  name: {
    title: '이지민',
    small: '[Jimin Lee]',
  },
  contact: [
    {
      title: 'leejimin159@gmail.com',
      link: 'mailto:leejimin159@gmail.com',
      icon: faEnvelope,
    },
    {
      title: 'Please contact me by E-mail',
      icon: faPhone,
      badge: true,
    },
    {
      link: 'https://github.com/leejimin3',
      icon: faGithub,
    },
    {
      link: 'https://jimin-do-main-page.notion.site/29f99e8819c840938b6e1ef7cd83f5b3?pvs=74',
      icon: faReadme,
    },
  ],
  notice: {
    title: '이메일로 연락주시면 감사하겠습니다.',
    icon: faBell,
  },
};

export default profile;

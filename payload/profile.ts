import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import { faBell } from '@fortawesome/free-regular-svg-icons';
import { IProfile } from '../component/profile/IProfile';
import image from '../asset/sample_tux.png';

const profile: IProfile.Payload = {
  disable: false,

  // image: 'https://resume.yowu.dev/static/image/profile_2019.png',
  image,
  name: {
    title: 'profile image',
    small: '(image)',
  },
  contact: [
    {
      title: 'leejimin159@gmail.com',
      link: 'leejimin159@gmail.com',
      icon: faEnvelope,
    },
    {
      title: '010-xxxx-xxxx',
      icon: faPhone,
      badge: true,
    },
    {
      link: 'https://github.com/leejimin3',
      icon: faGithub,
    },
  ],
  notice: {
    title: '이메일로 contact시 빠른 답장 가능합니다.',
    icon: faBell,
  },
};

export default profile;

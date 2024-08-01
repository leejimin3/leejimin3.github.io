import { ISkill } from '../component/skill/ISkill';

const programmingLanguages: ISkill.Skill = {
  category: 'Programming Languages',
  items: [
    {
      title: 'C++',
    },
    {
      title: 'C#',
    },
    {
      title: 'Python',
    },
    {
      title: 'C',
    },
    {
      title: 'Java',
    },
    {
      title: 'Lua',
    },
  ],
};

const GameEngine: ISkill.Skill = {
  category: 'Engine',
  items: [
    {
      title: 'Unreal Engine[4,5]',
    },
    {
      title: 'Unity',
    },
  ],
};

const ToolsandIDEs: ISkill.Skill = {
  category: 'Tools & IDEs',
  items: [
    {
      title: 'Git / Github',
    },
    {
      title: 'Visual Studio / VS Code',
    },
    {
      title: 'Notion',
    },
    {
      title: 'Jira',
    },
    {
      title: 'Confluence',
      },
    {
        title: 'SVN'
    },
  ],
};

const Misc: ISkill.Skill = {
  category: 'Misc',
  items: [
    {
      title: 'Oculus',
    },
    {
      title: 'Agile / Scrum',
    },
    {
      title: 'Game Experience',
    },
    {
      title: 'Communication',
    },
    {
      title: 'Code review',      
    },
    {
      title: 'Share insights',
    },
  ],
};

const skill: ISkill.Payload = {
  disable: false,
  skills: [
    programmingLanguages,
    GameEngine,
    ToolsandIDEs,
    Misc,
  ],
  tooltip: '자신 있는 스킬부터 나열하였습니다.',
};

export default skill;

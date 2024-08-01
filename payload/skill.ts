import { ISkill } from '../component/skill/ISkill';

const programmingLanguages: ISkill.Skill = {
  category: 'Programming Languages',
  items: [
    {
      title: 'C++',
    },
    {
      title: 'C',
    },
    {
      title: 'C#',
    },
    {
      title: 'Java',
    },
    {
      title: 'Python',
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
      title: 'Jira',
    },
    {
      title: 'Visual Studio / VS Code',
    },
    {
      title: 'Confluence',
    },
    {
      title: 'Notion',
    },
    {
      title: 'SVN',
    },
  ],
};

const Misc: ISkill.Skill = {
  category: 'Misc',
  items: [
    {
      title: 'Communication',
    },
    {
      title: 'Agile / Scrum',
    },
    {
      title: 'Game Experience',
    },
    {
      title: 'Oculus',
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
  skills: [programmingLanguages, GameEngine, ToolsandIDEs, Misc],
  tooltip: '숙련도 높은 스킬부터 나열',
};

export default skill;

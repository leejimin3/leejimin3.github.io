import { IProject } from '../component/project/IProject';

const project: IProject.Payload = {
  disable: false,
    list: [
    {
        title: '���ͺ� PVP �׼� ���� ���� [Unreal Engine]',
        startedAt: '2024-03',
        endedAt: '2014-06',
        where: 'UNSEEN[Smilegate x EpicGamesKorea]',
        descriptions: [
            {
                content:
                    'Unreal Engine5 �� C++�� ����� ���� ����. ��Ű¡ �Ϸ� �� �ÿ� ����',
            },
            {
                content:
                    'GAS�ý����� ����Ͽ� �������� ���� ���� ����',
            },
            {
                content:
                    '�𸮾� ��Ʈ��ũ �� EOS�� ����� ���� ���� ȯ�� ����',
            },
            {
                content:
                    '��Ƽ�÷��� �κ��丮 ������Ʈ �� UI ����',
            },
            {
                content:
                    'GitFlow�� ����Ͽ� ��� ���� �귣ġ �и�. �������� ���� ���� ȯ�� ����',
            },
        ],
    },
    {
        title: '���߾� ��Ʃ��� �÷��� ���� �ַ�� ���� [Unreal Engine]',
        startedAt: '2023-04',
        endedAt: '2024-01',
        where: '�齺��Ʈ(Vaxport)',
        descriptions: [
            {
                content:
                    '���� ö�� ���⿴�� ������Ʈ�� ��� ����. ���� ���� ��� �� ������Ʈ �Ϸ��Ͽ� �� n����� ������ ȹ��',
            },
            {
                content:
                    '�𸮾� ���� �÷����� �� ���� ��Ƽ �÷������� �ڵ带 �м� �� Ȯ�� ���',
                weight: 'MEDIUM',
                descriptions: [
                    { content: '"MultiEdit" �÷����� - �м� �� Ȯ���� ���� �Ϻ��� �ڵ�ȭ ����' },
                    { content: '"DMX" �÷����� - DMX �����͸� �̿��Ͽ� ���� ���� ����� ���� ���� ����ȭ' },
                    { content: '"Stable Diffusion" �÷����� - ���� ��Ƽ �÷����� �м� �� Ȯ��. AI�� ���� �� ������ �ν��Ͻ��� Material�� �ڵ� ����' },
                ],
            },
            {
                content:
                    '����� �ܱ� �ôϾ� �����ڿ� ���� ����',
            },
        ],
    },
    {
      title: 'ü���� ���� ü�� ���� �ǰ� ������ ���� [Unreal Engine]',
      startedAt: '2023-05',
      endedAt: '2023-12',
      where: '�齺��Ʈ(Vaxport)',
      descriptions: [
        {
          content:
            '������ �ǰ������� ���ð� "����������"�� ������Ʈ ���� �� ��������',
          },
        {
          content:
            '���� ������ �� ���� �����ڿ� �����Ͽ� ����Ͽ��� ������Ʈ�� �����ϰ� �����ϴ� ȯ�� ����',
            weight: 'MEDIUM',
            descriptions: [
                { content: '�������� ������� ȯ�� ����. ���������� ���� ����Ͽ��� ������Ʈ ���� �� ��� �۵�' },
                { content: 'RestAPI�� ����� HTTP����� ���� ����ڰ� �׸� �̹��� �����͸� ����. ������Ʈ�� DynamicMaterialIntance�� ����' },
            ],
        },
        {
          content:
            '�𸮾� �÷������� �м� �� ������Ʈ�� �����Ͽ� ���� Ÿ���� ��ũ���� ȭ���� ���������� ���',
          weight: 'MEDIUM',
          descriptions: [
            { content: '"SwitchBoard" �÷����� - �������� PC�� ���� ����. �ٷ��� PC�� ȭ���� ���յ� ȯ�� ����'},
            { content: '"nDisplay" �÷����� - ������Ʈ ������ ����ȭ. ������ ��ũ���� ȭ�� ���� ���' },
          ],
        },
      ],
    },
    {
        title: '������ ���� �� �Ҹ� ��� ���� ���� [Unity]',
        startedAt: '2023-12',
        endedAt: '2023-12',
        where: '"�ڳ�"������(BackEnd)',
        descriptions: [
            {
                content:
                    '������ �����͸� �����ϴ� �Ŵ��� ȯ�� ���� ���',
            },
            {
                content:
                    '��ȹ�ڿ� �����ϱ� ���� ȯ�� ����',
                weight: 'MEDIUM',
                descriptions: [
                    { content: 'CSV�� ���� �ҷ��� �����͸� ����� ScriptableObject ����' },
                    { content: '�ҷ��� �����͸� Linq�� ����� ������ ���͸�' },
                ],
            },
            {
                content: '�÷����� ����� ������Ʈ ������ ObjectPool ����',
            },
        ],
    },
  ],
};

export default project;

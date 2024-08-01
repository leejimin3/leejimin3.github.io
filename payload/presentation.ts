import { IPresentation } from '../component/presentation/IPresentation';

const presentation: IPresentation.Payload = {
    disable: false,

    list: [
        {
            title: '내가 "존중과 배움"을 통해 갈등을 해결하는 방법',
            subTitle: '네이버 SEF2023 컨퍼런스 [토크 버스킹]',
            at: '2023-10',
            descriptions: [
                {
                    content: '2차 면접을 통해 선별된 버스킹 내용을 발표',
                },
                {
                    content: '영상 링크 [25초 ~ 32초]: ',
                    postHref: 'https://youtu.be/EG4EocHJbdk?feature=shared&t=25',
                },
            ],
        },
    ],
};

export default presentation;

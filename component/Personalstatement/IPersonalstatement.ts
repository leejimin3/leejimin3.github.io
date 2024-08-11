import { ICommon } from '../common/ICommon';

export declare namespace IPersonalstatement {
  /**
   * ### Sample Rendering
   *
   * ![image](https://user-images.githubusercontent.com/8033320/78027282-156e6100-7398-11ea-9afa-91fa95716d1e.png)
   *
   * @example https://github.com/uyu423/resume-nextjs/blob/master/payload/introduce.ts
   */
  export interface Payload extends ICommon.Payload {
    /**
     * ### 자기소개 내용
     *
     * @description `string` 배열이다. 요소 하나가 하나의 `<p>` 태그가 된다.
     */
    contents: ContentItem[];
  }

  export interface ContentItem {
    text: string;
    bold?: boolean; // 굵은 글씨 여부
    fontsize?: string; // 폰트 크기
  }
}

// import { IRow } from '../common/IRow';
// import { ICommon } from '../common/ICommon';

// export declare namespace IPersonalstatement {
//  /**
//   * ### Sample Rendering
//   *
//   * ![image](https://user-images.githubusercontent.com/8033320/78058383-2f716900-73c3-11ea-8846-0eb0ae055f32.png)
//   *
//   * @example https://github.com/uyu423/resume-nextjs/blob/master/payload/openSource.ts
//   */
//  export interface Payload extends ICommon.Payload {
//    /** ### 오픈소스 활동 리스트 */
//    list: Item[];
//  }

//  /**
//   * @todo 기간을 넣을까?
//   */
//  interface Item {
//    /**
//     * ### 오픈소스 활동명
//     */
//    title: string;

//    /** ### 오픈소스 활동 설명 */
//    descriptions: IRow.Description[];
//  }
// }

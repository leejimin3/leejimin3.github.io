import { Col, Row } from 'reactstrap';
import { PropsWithChildren } from 'react';
import { EmptyRowCol, HrefTargetBlank } from '../common';

import { IFooter } from './IFooter';
import { Style } from '../common/Style';

export const Footer = {
  Component,
};

function Component({ payload }: PropsWithChildren<{ payload: IFooter.Payload }>) {
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  return (
    <Row>
      <Col style={Style.footerCover}>
        <div style={Style.footer} className="text-center mt-4">
          <EmptyRowCol>
            <small>
              v.{`${payload.version} / `}
              {/* Github 주소는 origin repository 의 주소를 넣는다. */}
              <HrefTargetBlank url="https://github.com/leejimin3" text="Github" />
            </small>
          </EmptyRowCol>
        </div>
      </Col>
    </Row>
  );
}

// https://github.com/uyu423/resume-nextjs
//              Thanks for <HrefTargetBlank url="https://blog.outsider.ne.kr/1234" text="Outsider" />

// <a href="#" onClick={scrollToTop}>
//    맨 위로
// </a>



//버튼 부분 25번줄
//{ ' / ' }
//<button
//    type="button"
//    onClick={scrollToTop}
//    style={{
//        background: 'none',
//        border: 'none',
//        padding: 0,
//        color: 'dodgerblue',
//        cursor: 'pointer',
//    }}
//>
//    맨 위로
//</button>
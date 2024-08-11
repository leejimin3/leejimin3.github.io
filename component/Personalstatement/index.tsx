import { Row, Col } from 'reactstrap';
import { PropsWithChildren } from 'react';
import { Style } from '../common/Style';
import { IPersonalstatement } from './IPersonalstatement';
import { PreProcessingComponent } from '../common/PreProcessingComponent';

type Payload = IPersonalstatement.Payload;

export const Personalstatement = {
  Component: ({ payload }: PropsWithChildren<{ payload: Payload }>) => {
    return PreProcessingComponent<Payload>({
      payload,
      component: Component,
    });
  },
};

function Component({ payload }: PropsWithChildren<{ payload: Payload }>) {
  return (
    <div className="mt-5">
      <Row>
        <Col sm={12} md={3}>
          <h2 style={Style.blue}>Personal Statement</h2>
        </Col>
        <Col sm={12} md={9}>
          {payload.contents.map((content, index) => (
              <p
                  key={index.toString()}
                  style={{fontSize: content.fontsize} }
              >
                  {content.bold ? <strong>{content.text}</strong> : content.text}</p>
          ))}
        </Col>
      </Row>
    </div>
  );
}

// import { PropsWithChildren } from 'react';
// import { IPersonalstatement } from './IPersonalstatement';
// import PersonalstatementRow from './row';
// import { CommonSection } from '../common/CommonSection';
// import { PreProcessingComponent } from '../common/PreProcessingComponent';

// type Payload = IPersonalstatement.Payload;

// export const Personalstatement = {
//  Component: ({ payload }: PropsWithChildren<{ payload: Payload }>) => {
//    return PreProcessingComponent<Payload>({
//      payload,
//      component: Component,
//    });
//  },
// };

// function Component({ payload }: PropsWithChildren<{ payload: Payload }>) {
//  return (
//    <CommonSection title="Personal Statement">
//      <PersonalstatementRow payload={payload} />
//    </CommonSection>
//  );
// }

import { PropsWithChildren } from 'react';
import { IPersonalstatement } from './IPersonalstatement';
import PersonalstatementRow from './row';
import { CommonSection } from '../common/CommonSection';
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
    <CommonSection title="Personal Statement">
      <PersonalstatementRow payload={payload} />
    </CommonSection>
  );
}

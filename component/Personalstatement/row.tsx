import { PropsWithChildren } from 'react';
import { IPersonalstatement } from './IPersonalstatement';
import { EmptyRowCol } from '../common';
import { CommonRows } from '../common/CommonRow';
import { IRow } from '../common/IRow';

export default function PersonalstatementRow({
  payload,
}: PropsWithChildren<{ payload: IPersonalstatement.Payload }>) {
  return (
    <EmptyRowCol>
      {payload.list.map((item, index) => (
        <CommonRows key={index.toString()} payload={serialize(item)} index={index} />
      ))}
    </EmptyRowCol>
  );
}

function serialize(item: IPersonalstatement.Item): IRow.Payload {
  return {
    left: {
      title: item.title,
    },
    right: {
      descriptions: item.descriptions,
    },
  };
}

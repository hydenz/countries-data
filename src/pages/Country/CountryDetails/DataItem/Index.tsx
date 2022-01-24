import * as S from './styles';

const DataItem = ({ dataKey, dataValue }: DataItemProps) => {
  return (
    <p>
      <S.DataKey>{dataKey}: </S.DataKey>
      {dataValue}
    </p>
  );
};

export default DataItem;

interface DataItemProps {
  dataKey: string;
  dataValue: string;
}

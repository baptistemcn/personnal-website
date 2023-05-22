interface TechnologiesProps {
  name: Array<TechnologiesItems>;
}

interface TechnologiesItems {
  name: string;
}

export const Technologies = ({ name }: TechnologiesProps) => {
  return (
    <>
      {name.map((item, index) => {
        <ul key={index}>
          <li>{item.name}</li>
          <span>-</span>
        </ul>;
      })}
    </>
  );
};

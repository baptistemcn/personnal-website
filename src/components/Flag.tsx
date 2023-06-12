import "./flag.css";

interface FlagProps {
  nation: string;
}

export const Flag = ({ nation }: FlagProps) => {
  return (
    <>
      <img src={nation} />
    </>
  );
};

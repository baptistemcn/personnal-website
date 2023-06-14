import "./flag.css";

interface FlagProps {
  nation: string;
  description: string;
}

export const Flag = ({ nation, description }: FlagProps) => {
  return (
    <>
      <img src={nation} alt={description} />
    </>
  );
};

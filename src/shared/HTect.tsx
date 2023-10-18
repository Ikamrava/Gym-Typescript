

type Props = {
  children: React.ReactNode;
};

const HText = ({ children }: Props) => {
  return (
    <h3 className="basis-3/5 font-montserrat text-xl font-bold">{children}</h3>
  );
};

export default HText;

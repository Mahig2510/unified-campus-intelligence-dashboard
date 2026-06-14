interface Props {
  title: string;
}

const SectionTitle = ({
  title,
}: Props) => {
  return (
    <h2 className="mb-5 mt-12 text-2xl font-bold">
      {title}
    </h2>
  );
};

export default SectionTitle;
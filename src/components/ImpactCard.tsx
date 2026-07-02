type ImpactCardProps = {
  number: string;
  title: string;
};

function ImpactCard({ number, title }: ImpactCardProps) {
  return (
    <div className="bg-white rounded-3xl p-8 shadow-sm text-center">
      <h2 className="text-5xl font-bold text-primary">
        {number}
      </h2>

      <p className="mt-4 text-gray-600">
        {title}
      </p>
    </div>
  );
}

export default ImpactCard;
import type { ReactNode } from "react";

interface Props {
  title: string;
  value: number;
  icon: ReactNode;
}

const StatCard = ({
  title,
  value,
  icon,
}: Props) => {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">

      <div className="flex items-center justify-between">

        <p className="text-sm font-medium text-slate-500">
          {title}
        </p>

        <div>
          {icon}
        </div>

      </div>

      <h2 className="mt-4 text-4xl font-bold text-slate-900">
        {value}
      </h2>

    </div>
  );
};

export default StatCard;
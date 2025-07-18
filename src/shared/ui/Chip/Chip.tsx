import s from './Chip.module.css';
export const Chip = ({label, ...props}: {label: string} & React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div {...props} className={s.chip_wrapper}>{label}</div>
  );
};

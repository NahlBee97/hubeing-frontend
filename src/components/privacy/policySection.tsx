interface props {
  title: string;
  children: React.ReactNode;
}

export const PolicySection = ({ title, children }: props) => (
  <>
    <h3 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
      {title}
    </h3>
    <p className="text-white text-base font-normal leading-normal pb-3 pt-1 px-4">
      {children}
    </p>
  </>
);

import { ChevronDown } from "lucide-react";

const PageFooter = ({ target }) => {
  return (
    <div className="flex justify-center items-end">
      <a href={`#${target}`}>
        <ChevronDown className="text-foreground" />
      </a>
    </div>
  );
};

export default PageFooter;

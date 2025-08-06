import { typography } from "@/app/interface/interface";
const TypographyH1:React.FC<typography> = ({text}) => {
  return (
    <h1 className="scroll-m-20 text-8xl font-extrabold tracking-tight text-balance">
      {text}
    </h1>
  )
}

export default TypographyH1;

import { typography } from "@/app/interface/interface";
const TypographyLead:React.FC<typography> = ({text}) => {
  return (
    <p className="text-muted-foreground text-2xl">
      {text}
    </p>
  )
}

export default TypographyLead;

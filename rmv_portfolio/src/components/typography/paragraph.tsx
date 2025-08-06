import { typography } from "@/app/interface/interface";
const TypographyP:React.FC<typography> = ({text}) => {
  return (
    <p className="leading-7 [&:not(:first-child)]:mt-6">
      {text}
    </p>
  )
}
export default TypographyP;
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

type Props = {

}
export const UseSearchParams = ({ }: Props) => {
  let [searchParams, setSearchParams] = useSearchParams()

  useEffect(() => { console.log(`look url ${searchParams}`) }, [searchParams])


  // return value to url on set
  return (
    <div>
      <input type="text" name="" id="" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchParams(e.target.value)} />

    </div>
  );
}
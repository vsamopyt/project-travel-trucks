import {useId} from "react"
const useCreatedIds =(names) =>{
   const ii = names.reduce((acc, name) => {
        acc[name] = useId();
        return acc;
      }, {});
      return ii

}
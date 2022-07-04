import Link,{LinkProps} from 'next/link'
import { useRouter } from 'next/router';
import { cloneElement, ReactElement } from 'react'

interface ActiveLink extends LinkProps{
children:ReactElement;
shouldMatchExtractHref?:boolean;
}
  
export function ActiveLink ({children,shouldMatchExtractHref,...rest}:ActiveLink){
  const { asPath } = useRouter()

  let isActive = false;

  if(shouldMatchExtractHref && (asPath === rest.href || asPath === rest.as)){
    isActive =true
  } 
  if(!shouldMatchExtractHref &&(
    asPath.startsWith(String(rest.href)) ||
    asPath.startsWith(String(rest.as)))){
      isActive =true
    }
  return(
     <Link {...rest}>
      {cloneElement(children,{
        color:isActive ? 'pink.400' : 'gray.50'
      } )}
     </Link> 
  )
}
import { useEffect } from 'react';

interface IProps {
  root : Element | null 
  target : Element | null
  onIntersect : (entries: IntersectionObserverEntry[], observer: IntersectionObserver)=> void 
  threshold :number | number[] 
  rootMargin :string
} 

export const useInfinteScroll = ({root=null, target, onIntersect, threshold= 1.0, rootMargin='0px'}:IProps) => {
  useEffect(()=>{
    const observer = new IntersectionObserver(onIntersect, {root, rootMargin, threshold}); 
    if(!target){
      return;
    }
    observer.observe(target);

    return ()=>{
      observer.unobserve(target);
    }

  },[target, root, rootMargin, onIntersect, threshold]);
}

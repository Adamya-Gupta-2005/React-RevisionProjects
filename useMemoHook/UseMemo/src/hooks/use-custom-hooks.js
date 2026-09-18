import { useEffect, useRef } from "react"

const areEqualDependencies = (prevDeps, nextDeps) => {
    if(prevDeps === null) return false
    if(prevDeps.length !== nextDeps.length) return false

    for(let i=0;i<prevDeps.length;i++) {
        if(prevDeps[i] !== nextDeps[i]) return false;
    }

    return true;
}

const useCustomMemo = (cb, deps) => {
    const memoizedRef = useRef();
    //value of useRef remains persistent until components lifecycle 
    //dont loose value on re renders

    if(!memoizedRef.current || !areEqualDependencies(memoizedRef.current.deps, deps)) {
        memoizedRef.current={
            value: cb(),
            deps
        }
    }

    //clean up
    useEffect(() => {
        return () => {
            memoizedRef.current = null
        }
    },[])

    return memoizedRef.current.value
}

export default useCustomMemo
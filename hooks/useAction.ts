import { useCallback } from 'react'
import { useDispatch } from 'react-redux'

function useAction<M extends (...args: any) => any>(
  module: M
): (...args: Parameters<M>) => ReturnType<typeof useCallback>

function useAction(module: any) {
  const dispatch = useDispatch()
  return useCallback((value) => dispatch(module(value)), [module, dispatch])
}

export default useAction

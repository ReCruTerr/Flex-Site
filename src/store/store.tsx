import {create} from 'zustand';

type valueState = {
    value: string
  }
  
  type Action = {
    updateValue: (value: valueState['value']) => void,
    cleanValue: () => void
  }

export const useSetInput = create<valueState & Action >((set)=>({ 
    value:'',
    updateValue:(current) => set(() => ({value:current})),
    cleanValue:() => set({value:''})
}))
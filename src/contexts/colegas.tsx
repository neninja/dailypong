import React, { createContext, useState, useEffect, useContext } from 'react';

interface ColegasContextData {
  colegas: string[],
  setColegas: (c: string[]) => void
}

interface ColegasProviderProps {
  children: React.ReactNode
}

const ColegasContext = createContext<ColegasContextData>({} as ColegasContextData);

export function ColegasProvider({ children }: ColegasProviderProps) {
  const [ colegas, setColegas ] = useState<string[]>([])

  useEffect(() => {
    let c = localStorage.getItem('@dailypong:colegas') ?? '[]'
    setColegas(JSON.parse(c))
  }, [])

  useEffect(() => {
    localStorage.setItem('@dailypong:colegas', JSON.stringify(colegas))
  }, [colegas])

  return (
    <ColegasContext.Provider
      value={{ colegas, setColegas }}
    >
      {children}
    </ColegasContext.Provider>
  );
}

export function useColegas(){
  const context = useContext(ColegasContext);

    return context;
}

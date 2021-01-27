import React, { ChangeEvent } from "react";
import { ID } from "../Interfaces/ID.interface";
import { v4 as uuidv4 } from "uuid";

export const UseStateHelperFormInputChange = <T>(dispatch: React.Dispatch<React.SetStateAction<T>>) => (event: ChangeEvent<HTMLInputElement>) => {
  event.persist();
  return (
    dispatch((prev: T) => {
      return {
        ...prev,
        [event.target.name]: event.target.value,
      };
    })
  )
};

export const UseStateHelperArrayElementIDInputChange = <T extends ID>(dispatch: React.Dispatch<React.SetStateAction<T[]>>) => (id: string) => (event: ChangeEvent<HTMLInputElement | { value: unknown; name: string }>) => {
  event.persist();
  return (
    dispatch((prev: T[]) => prev.map((x) => x.id === id ? { ...x, [event.target.name]: event.target.value } : x))
  )
};

export const UseStateHelperArrayElementIDChange = <T extends ID>(dispatch: React.Dispatch<React.SetStateAction<T[]>>) => (id: string) => (property: string, value: any) => {
  return (
    dispatch((prev: T[]) => prev.map((x) => x.id === id ? { ...x, [property]: value } : x))
  )
};

export const UseStateHelperArrayElementIDDelete = <T extends ID>(dispatch: React.Dispatch<React.SetStateAction<T[]>>) => (id: string) => () => {
  return (
    dispatch((prev: T[]) => prev.filter((x) => x.id !== id))
  )
};

export const UseStateHelperArrayElementIDAdd = <T extends ID>(dispatch: React.Dispatch<React.SetStateAction<T[]>>) => (item: T) => () => {
  return (
    dispatch((prev: T[]) => prev.concat({ ...item, id: uuidv4() }))
  )
};
import { useState } from "react";

import { useBoolean } from "./useBoolean";

export function useResourceModal<T>() {
  const [resource, setResource] = useState<T | null>(null);
  const { value: isOpenModal, handleTrue, handleFalse } = useBoolean(false);

  const openModal = (resource?: T) => {
    if (resource) setResource(resource);
    handleTrue();
  };

  const closeModal = () => {
    if (resource) setResource(null);
    handleFalse();
  };

  return { isOpenModal, openModal, closeModal, resource };
}
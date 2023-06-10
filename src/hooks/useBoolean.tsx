import { useCallback, useState } from 'react';

export function useBoolean(initialValue: boolean = false) {
  const [value, setValue] = useState<boolean>(initialValue);

  const handleTrue = useCallback(() => {
    setValue(true);
  }, []);
  const handleFalse = useCallback(() => {
    setValue(false);
  }, []);
  const toggle = useCallback(() => {
    setValue((prev) => !prev);
  }, []);

  return { value, handleTrue, handleFalse, toggle };
}

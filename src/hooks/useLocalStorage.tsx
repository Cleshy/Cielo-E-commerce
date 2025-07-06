function useLocalStorage<T>(key: string): {
  setItem: (value: T) => void;
  getItem: () => T | null;
  removeItem: () => void;
} {
  const setItem = (value: T) => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (err) {
      console.log("Error setting item: ", err);
    }
  };

  const getItem = (): T | null => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? (JSON.parse(item) as T) : null;
    } catch (err) {
      console.log("Error getting item: ", err);
      return null;
    }
  };

  const removeItem = (): void => {
    try {
      window.localStorage.removeItem(key);
    } catch (err) {
      console.error("Error removing item from localStorage: ", err);
    }
  };

  return { setItem, getItem, removeItem };
}

export default useLocalStorage;

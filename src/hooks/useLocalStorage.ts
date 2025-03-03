const useLocalStorage = () => {
  const setLocalStorage = (key: string, value: string) => {
    if (typeof value === "object") {
      value = JSON.stringify(value);
    }
    localStorage.setItem(key, value);
  };

  const getLocalStorage = (key: string) => {
    const value = localStorage.getItem(key);
    if (value) {
      try {
        return JSON.parse(value);
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (e) {
        return value;
      }
    }
    return null;
  };
  const removeLocalStorage = (key: string) => {
    localStorage.removeItem(key);
  };

  return { setLocalStorage, getLocalStorage, removeLocalStorage };
};

export default useLocalStorage;

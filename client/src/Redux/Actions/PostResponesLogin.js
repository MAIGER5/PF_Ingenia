export const LOAD_LOCAL_STORAGE_DATA = 'LOAD_LOCAL_STORAGE_DATA';

export const PostResponesLogin = () => {
  const nombreClave = localStorage.key;
  const localStorageData = localStorage.getItem(nombreClave);
  return {
    type: 'LOAD_LOCAL_STORAGE_DATA',
    payload: localStorageData,
  };
}

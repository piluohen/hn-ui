export const Session = {
  get(key: string) {
    return JSON.parse(sessionStorage.getItem(key));
  },
  set(key: string, data: any) {
    sessionStorage.setItem(key, JSON.stringify(data));
  }
};

export const Local = {
  get(key: string) {
    return JSON.parse(localStorage.getItem(key));
  },
  set(key: string, data: any) {
    localStorage.setItem(key, JSON.stringify(data));
  }
};

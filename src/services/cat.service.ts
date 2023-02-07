export const findAll = async () => {
  return new Promise(async (resolve, reject) => {
    try {
      const data = {
        cat: "meow",
      };
      resolve(data);
    } catch (error) {
      reject(error);
    }
  });
};

export const findById = async (id: string) => {
  return new Promise(async (resolve, reject) => {
    try {
      const data = {
        id: id,
        cat: "meow",
      };
      resolve(data);
    } catch (error) {
      reject(error);
    }
  });
};

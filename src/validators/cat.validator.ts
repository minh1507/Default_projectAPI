export const create = (data: any) => {
  if (data.name && data.age) {
    return true;
  }
  return false;
};

export const createMany = (data: any) => {
  if (data.length > 0 && Array.isArray(data)) {
    var catBool = data.filter((value: any) => {return value.name && value.age})
    if(catBool.length == data.length){
      return true
    }
    return false
  }
  return false;
};

export const deleteMany = (data: any) => {
  if (data.length > 0 && Array.isArray(data)) {
    var catBool = data.filter((value: any) => {return value.name && value.age})
    if(catBool.length == data.length){
      return true
    }
    return false
  }
  return false;
};

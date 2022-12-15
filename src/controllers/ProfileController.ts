import { Services } from '../services/services';

const service = new Services();
const getXpAndLevel = async (session:any) => {
  const idUser = session.user.id;
  // @ts-ignore
  const {xp, level} = await service.getXpAndLevel(idUser);
  return xp;
};

export {
  getXpAndLevel
};
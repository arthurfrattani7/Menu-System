export type UserMapperI = {
  id: string;
  name: string;
  email: string;
  password: string;
  createdAt: Date;
};

export type CoupleMapperI = {
  id: string;
  userOneId: string;
  userTwoId: string;
  createdAt: Date;
};

export type MusicMapperI = {
  id: string;
  name: string;
  artist: string;
  url: string;
  createdAt: Date;
};

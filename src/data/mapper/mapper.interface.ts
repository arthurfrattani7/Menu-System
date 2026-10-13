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

export type PageMapperI = {
  id: string;
  coupleId: string;
  order: number;
  musicId: string | null;
  durationSeconds: number | null;
  musicStartSeconds: number;
  createdAt: Date;
};

export type PhotoMapperI = {
  id: string;
  url: string;
  sortOrder: number;
  pageId: string;
  createdAt: Date;
};

export type VideoMapperI = PhotoMapperI;

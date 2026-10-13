import { Music } from "./musicModel";
import { Page } from "./pageModel";
import { Photo } from "./photoModel";
import { Video } from "./videoModel";

// Uma página do livro já com tudo que é exibido nela.
export type PageBook = {
  page: Page;
  music: Music | null;
  photos: Photo[];
  videos: Video[];
};

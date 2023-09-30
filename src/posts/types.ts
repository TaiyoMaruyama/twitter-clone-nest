export type Post = {
  id: string;
  userId: string;
  postedAt: Date;
  text: string;
  reply?: string;
  rePost?: string;
  good?: string;
  analytics?: number;
};

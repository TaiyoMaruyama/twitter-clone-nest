export class PostDto {
  userName: string;
  userId: string;
  // todo: APIのレスポンス次第で変更
  postedAt: Date;
  text: string;
  // bottomActionの有無はそれぞれのテーブルからidがら返却されたかどうかで判断
  reply?: string;
  rePost?: string;
  good?: string;
  analytics?: number;
}

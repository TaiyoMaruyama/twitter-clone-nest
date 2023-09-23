export class PostDto {
  userName: string;
  officialBudge: boolean;
  userId: string;
  // todo: APIのレスポンス次第で変更
  postedDuration: string;
  text: string;
  // bottomActionの有無はそれぞれのテーブルからidがら返却されたかどうかで判断
  reply?: string;
  rePost?: string;
  good?: string;
  analytics?: number;
}

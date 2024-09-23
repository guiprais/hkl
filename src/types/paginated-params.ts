export enum OrderEnum {
  ASC = "asc",
  DESC = "desc",
}

export interface IPaginatedParams {
  _page?: number;
  _limit?: number;
  _sort?: string;
  _order?: OrderEnum;
}

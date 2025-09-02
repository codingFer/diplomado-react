export type UserFilterActiveType = 'active' | 'inactive' | 'all';

export type UserType = {
  id: number;
  username: string;
  status: string;
  password?: string;
};

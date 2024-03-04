export interface LoginProps {
  email: string;
  password: string;
}

export interface RoleModel {
  id?: number;
  code?: string | undefined | any;
  text?: string;
}

export interface ChangePasswordModel {
  id?: number;
  oldPassword?: string;
  newPassword?: string;
  confirmPassword?: string;
}

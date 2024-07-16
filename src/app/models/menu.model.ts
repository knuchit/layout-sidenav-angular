export interface MenuOptions {
  id?: number;
  code?: string | null;
  name?: string | null;
  descr?: string | null;
  link?: string | null;
  icon?: string | null;
  status?: boolean | null;
  readonly?: boolean | null;
  roleid?: number | null;
  seqno?: number | null;
}

export interface Menu extends MenuOptions{
  submenu?: MenuOptions[]
}

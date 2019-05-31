export interface IResponseScan {
  name: string;
  file: {
    basename: string,
    realPath: string,
    extension: string
  };
  hashPath: string;
}

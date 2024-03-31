import { ICustomer } from "../customers/ICustomer"
export interface IApplication {
  id: number ,
  customer : ICustomer,
  applicationStatus: boolean
}

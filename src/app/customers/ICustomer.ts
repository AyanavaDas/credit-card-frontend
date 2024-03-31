import { INotification } from "../notifications/INotification"
export interface ICustomer {
  id : number,
  notifications : INotification[],
  contactNumber : string,
  firstName : string,
  emailAddress : string,
  lastName : string
}

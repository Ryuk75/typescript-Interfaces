import { iDob } from './dob.interface';
import { iId } from './id.interface';
import { iLocation } from './location.interface';
import { iLogin } from './login.interface';
import { iName } from './name.interface';
import { iPicture } from './picture.interface';
import { iRegistered } from './registered.interface';

export interface iUser {
  gender: string;
  name: iName;
  location: iLocation;
  email: string;
  login: iLogin;
  dob: iDob;
  registered: iRegistered;
  phone: string;
  cell: string;
  id: iId;
  picture: iPicture;
  nat: string;
}

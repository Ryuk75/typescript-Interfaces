import { iCoordinates } from './coordinates.interface';
import { iStreet } from './street.interface';
import { iTimezone } from './timezone.interface';

export interface iLocation {
  street: iStreet;
  city: string;
  state: string;
  country: string;
  postcode: number;
  coordinates: iCoordinates;
  timezone: iTimezone;
}

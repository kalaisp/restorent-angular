import { iPropertyBase } from "./Ipropertybase";

export class property implements iPropertyBase{
  Id!: number | null;
  Name!: string | null;
  Price!: number | null;
  SellRent!: number | null;
  FType!: number | null;
  PType!: number | null;
  Type!: string | null;
  BHK!: number | null;
  BuildArea!: number | null;
   Security?:string|null;
   AOP?:string;
  City!: string;
  Image?: string;
  propertyTypeId!: number|null;
  furnishingTypeId!: number|null;
  carpetArea?: number|null;
  address!: string|null;
  address2?: string|null;
  CityId!: number|null;
  floorNo?: string|null;
  totalFloors?: string|null;
  RTM!: boolean|null;
  age?: string|null;
  mainEntrance?: string|null;
  security?: number|null;
  gated?: number|null;
  maintenance?: number|null;
  PossessionOn?: string|null;
  photo?: string|null;
  description?: string|null;
  postedon?:string|null;
  postedby?:string|null;
}

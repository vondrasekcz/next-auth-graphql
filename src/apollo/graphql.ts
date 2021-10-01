import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  FileUpload: any;
  JSON: any;
};

export type AuthPayload = {
  __typename?: 'AuthPayload';
  email: Scalars['String'];
  id: Scalars['ID'];
  token: Token;
};

export type AutoScout24Dial = {
  __typename?: 'AutoScout24Dial';
  key: Scalars['String'];
  value: Scalars['String'];
};

export type AutoScout24Dials = {
  __typename?: 'AutoScout24Dials';
  AvailabilityType: Array<AutoScout24Dial>;
  BodyColor: Array<AutoScout24Dial>;
  BodyType: Array<AutoScout24Dial>;
  Country: Array<AutoScout24Dial>;
  DebitInterestType: Array<AutoScout24Dial>;
  Drivetrain: Array<AutoScout24Dial>;
  EfficiencyClass: Array<AutoScout24Dial>;
  Equipment: Array<AutoScout24Dial>;
  EuEmissionStandard: Array<AutoScout24Dial>;
  FuelCategory: Array<AutoScout24Dial>;
  FuelType: Array<AutoScout24Dial>;
  GermanEmissionSticker: Array<AutoScout24Dial>;
  IncludedService: Array<AutoScout24Dial>;
  Manufacturers: Array<AutoScout24Dial>;
  Models: Array<AutoScout24Dial>;
  OfferType: Array<AutoScout24Dial>;
  Transmission: Array<AutoScout24Dial>;
  UpholsteryColor: Array<AutoScout24Dial>;
  UpholsteryType: Array<AutoScout24Dial>;
  VehicleType: Array<AutoScout24Dial>;
  equipmentCategories: Array<EquipmentCategory>;
  modelsByManufacturers: Array<AutoScout24ModelsByManufacturer>;
};

export type AutoScout24ModelsByManufacturer = {
  __typename?: 'AutoScout24ModelsByManufacturer';
  manufacturerId: Scalars['String'];
  models: Array<AutoScout24Dial>;
};

export type AutoScout24Offer = {
  __typename?: 'AutoScout24Offer';
  equipmentIds: Array<Scalars['String']>;
  imageUrls: Array<Scalars['String']>;
  optionalParameters: AutoScout24OptionalParametersType;
  requiredParameters: AutoScout24RequiredParametersType;
};

export type AutoScout24OfferInput = {
  equipmentIds: Array<Scalars['String']>;
  imageUrls: Array<Scalars['String']>;
  optionalParameters: AutoScout24OptionalParametersInputType;
  requiredParameters: AutoScout24RequiredParametersInputType;
};

export type AutoScout24OptionalParametersInputType = {
  consumption?: Maybe<Scalars['Float']>;
  cylinderCapacity?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  doorCount?: Maybe<Scalars['Int']>;
  emptyWeight?: Maybe<Scalars['Float']>;
  hasFullServiceHistory?: Maybe<Scalars['Boolean']>;
  licencePlate?: Maybe<Scalars['String']>;
  mileage?: Maybe<Scalars['Int']>;
  power?: Maybe<Scalars['Int']>;
  productionYear?: Maybe<Scalars['String']>;
  seatCount?: Maybe<Scalars['Int']>;
  transmission?: Maybe<Scalars['String']>;
  vin?: Maybe<Scalars['String']>;
  warranty?: Maybe<Scalars['Int']>;
};

export type AutoScout24OptionalParametersType = {
  __typename?: 'AutoScout24OptionalParametersType';
  consumption?: Maybe<Scalars['Float']>;
  cylinderCapacity?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  doorCount?: Maybe<Scalars['Int']>;
  emptyWeight?: Maybe<Scalars['Float']>;
  hasFullServiceHistory?: Maybe<Scalars['Boolean']>;
  licencePlate?: Maybe<Scalars['String']>;
  mileage?: Maybe<Scalars['Int']>;
  power?: Maybe<Scalars['Int']>;
  productionYear?: Maybe<Scalars['String']>;
  seatCount?: Maybe<Scalars['Int']>;
  transmission?: Maybe<Scalars['String']>;
  vin?: Maybe<Scalars['String']>;
  warranty?: Maybe<Scalars['Int']>;
};

export type AutoScout24RequiredParametersInputType = {
  bodyColor?: Maybe<Scalars['String']>;
  bodyType?: Maybe<Scalars['String']>;
  co2Emissions?: Maybe<Scalars['Int']>;
  countryVersion?: Maybe<Scalars['String']>;
  cylinderCount?: Maybe<Scalars['Int']>;
  efficiencyClass?: Maybe<Scalars['String']>;
  firstRegistrationDate?: Maybe<Scalars['DateTime']>;
  gearCount?: Maybe<Scalars['Int']>;
  make?: Maybe<Scalars['String']>;
  model?: Maybe<Scalars['String']>;
  modelVersion?: Maybe<Scalars['String']>;
  offerType?: Maybe<Scalars['String']>;
  previousOwnerCount?: Maybe<Scalars['Int']>;
  price?: Maybe<Scalars['Int']>;
  primaryFuelType?: Maybe<Scalars['String']>;
  vatDeduction?: Maybe<Scalars['Boolean']>;
  vehicleType?: Maybe<Scalars['String']>;
};

export type AutoScout24RequiredParametersType = {
  __typename?: 'AutoScout24RequiredParametersType';
  bodyColor?: Maybe<Scalars['String']>;
  bodyType?: Maybe<Scalars['String']>;
  co2Emissions?: Maybe<Scalars['Int']>;
  countryVersion?: Maybe<Scalars['String']>;
  cylinderCount?: Maybe<Scalars['Int']>;
  drivetrain?: Maybe<Scalars['String']>;
  efficiencyClass?: Maybe<Scalars['String']>;
  firstRegistrationDate?: Maybe<Scalars['DateTime']>;
  gearCount?: Maybe<Scalars['Int']>;
  make?: Maybe<Scalars['String']>;
  model?: Maybe<Scalars['String']>;
  modelVersion?: Maybe<Scalars['String']>;
  offerType?: Maybe<Scalars['String']>;
  previousOwnerCount?: Maybe<Scalars['Int']>;
  price?: Maybe<Scalars['Int']>;
  primaryFuelType?: Maybe<Scalars['String']>;
  vatDeduction?: Maybe<Scalars['Boolean']>;
  vehicleType?: Maybe<Scalars['String']>;
};

export type Brand = {
  __typename?: 'Brand';
  key: Scalars['String'];
  value: Scalars['String'];
};

export type BrandsAndModels = {
  __typename?: 'BrandsAndModels';
  brandKey: Scalars['String'];
  models: Array<Model>;
};

export type BrandsAndModelsInput = {
  brand: Scalars['String'];
  models: Array<Scalars['String']>;
};

export type Calculations = {
  __typename?: 'Calculations';
  priceBrutto?: Maybe<Scalars['Int']>;
  priceNetto?: Maybe<Scalars['Int']>;
  priceWithTransportationBrutto?: Maybe<Scalars['Int']>;
  priceWithTransportationNetto?: Maybe<Scalars['Int']>;
  priceWithoutTransportationBrutto?: Maybe<Scalars['Int']>;
  priceWithoutTransportationNetto?: Maybe<Scalars['Int']>;
  revenuePriceBrutto?: Maybe<Scalars['Int']>;
  revenuePriceNetto?: Maybe<Scalars['Int']>;
  transportationPriceBrutto?: Maybe<Scalars['Int']>;
  transportationPriceNetto?: Maybe<Scalars['Int']>;
  vatDeduction: Scalars['Boolean'];
};

export type ChassisType = {
  __typename?: 'ChassisType';
  key: ChassisEnum;
  value: Scalars['String'];
};

export type ColourType = {
  __typename?: 'ColourType';
  key: ColourEnum;
  value: Scalars['String'];
};

export type ConditionType = {
  __typename?: 'ConditionType';
  key: ConditionEnum;
  value: Scalars['String'];
};

export type DetailedPrice = {
  __typename?: 'DetailedPrice';
  calculations: Calculations;
  countryCode: CountryCodeEnum;
  price: Scalars['Int'];
};

export type Dial = {
  __typename?: 'Dial';
  key: Scalars['String'];
  value: Scalars['String'];
};

export type DialEquipment = {
  __typename?: 'DialEquipment';
  key: EquipmentEnum;
  value: Scalars['String'];
};

export type DialExportType = {
  __typename?: 'DialExportType';
  key: OfferExportEnum;
  value: Scalars['String'];
};

export type DialType = {
  __typename?: 'DialType';
  key: TypeEnum;
  value: Scalars['String'];
};

export type DialTypeItem = {
  __typename?: 'DialTypeItem';
  key: Scalars['String'];
  value: Scalars['String'];
};

export type DialTypeKeyValue = {
  __typename?: 'DialTypeKeyValue';
  key: Scalars['String'];
  value: Scalars['String'];
};

export type Dials = {
  __typename?: 'Dials';
  CHASSIS: Array<Dial>;
  COLOUR: Array<Dial>;
  CONDITION: Array<Dial>;
  DRIVE_AXLE: Array<Dial>;
  EQUIPMENT: Array<Dial>;
  FUEL: Array<Dial>;
  GEARBOX_TYPE: Array<Dial>;
  TYPE: Array<Dial>;
  UPHOLSTERY: Array<Dial>;
};

export type DriveAxleType = {
  __typename?: 'DriveAxleType';
  key: DriveAxleEnum;
  value: Scalars['String'];
};

export type DynamicTranslation = {
  __typename?: 'DynamicTranslation';
  carsCount: Scalars['Int'];
  dialType: DialTypeKeyValue;
  id: Scalars['ID'];
  siteName: Scalars['String'];
  term: Scalars['String'];
  translations?: Maybe<Array<TranslatedTerm>>;
  updatedAt: Scalars['DateTime'];
};

export type DynamicTranslationFilterInput = {
  dialType?: Maybe<Scalars['String']>;
  siteName?: Maybe<Scalars['String']>;
  translated?: Maybe<Scalars['Boolean']>;
};

export type DynamicTranslationInput = {
  carsCount: Scalars['Int'];
  dialType: Scalars['String'];
  extraInfo?: Maybe<Scalars['String']>;
  term: Scalars['String'];
};

export type DynamicTranslationSelection = {
  __typename?: 'DynamicTranslationSelection';
  data: Array<DynamicTranslation>;
  pagination: Pagination;
};

export type EnergyLabelType = {
  __typename?: 'EnergyLabelType';
  key: EnergyLabelEnum;
  value: Scalars['String'];
};

export type EquipmentCategory = {
  __typename?: 'EquipmentCategory';
  equipmentIds: Array<Scalars['Int']>;
  name: Scalars['String'];
};

export type EquipmentInputType = {
  items: Array<EquipmentEnum>;
  name: EquipmentTypeEnum;
};

export type EquipmentType = {
  __typename?: 'EquipmentType';
  items: Array<DialEquipment>;
  name: EquipmentTypeEnum;
};

export enum EquipmentTypeEnum {
  Aircondition = 'AIRCONDITION',
  Comfort = 'COMFORT',
  ExteriorOrLights = 'EXTERIOR_OR_LIGHTS',
  Multimedia = 'MULTIMEDIA',
  Parking = 'PARKING',
  Security = 'SECURITY',
  SensorOrAsistant = 'SENSOR_OR_ASISTANT',
  WheelsOrSuspenion = 'WHEELS_OR_SUSPENION'
}

export type Filter = {
  __typename?: 'Filter';
  acceleration?: Maybe<MinMaxFloat>;
  chassis: Array<ChassisType>;
  colour: Array<ColourType>;
  colourExterior?: Maybe<Array<ColourType>>;
  condition: Array<ConditionType>;
  consumption?: Maybe<MinMaxFloat>;
  cylinders?: Maybe<MinMaxInt>;
  displacement?: Maybe<MinMaxInt>;
  driveAxle: Array<DriveAxleType>;
  emissionCO2?: Maybe<MinMaxInt>;
  energyLabel: Array<EnergyLabelType>;
  enginePower?: Maybe<MinMaxInt>;
  equipment: Array<EquipmentType>;
  euroStandard?: Maybe<MinMaxInt>;
  exportedTo: Array<DialExportType>;
  fuel: Array<FuelType>;
  gearboxType: Array<GearboxTypeType>;
  inStock?: Maybe<Scalars['Boolean']>;
  manufactureMonth?: Maybe<MinMaxInt>;
  manufactureYear?: Maybe<MinMaxInt>;
  mileage?: Maybe<MinMaxInt>;
  modelYear?: Maybe<MinMaxInt>;
  numberOfDoors?: Maybe<MinMaxInt>;
  numberOfElectricalEngines?: Maybe<MinMaxInt>;
  numberOfGears?: Maybe<MinMaxInt>;
  numberOfOwners?: Maybe<MinMaxInt>;
  numberOfSeats?: Maybe<MinMaxInt>;
  powerOfFrontEngine?: Maybe<MinMaxInt>;
  powerOfRearEngine?: Maybe<MinMaxInt>;
  price?: Maybe<MinMaxInt>;
  site: Array<Dial>;
  topSpeed?: Maybe<MinMaxInt>;
  torque?: Maybe<MinMaxInt>;
  type: Array<TypeType>;
  upholstery: Array<UpholsteryType>;
  vatDeductible?: Maybe<Scalars['Boolean']>;
};

export type FilterInput = {
  acceleration?: Maybe<MinMaxFloatInput>;
  brandsAndModels?: Maybe<Array<BrandsAndModelsInput>>;
  carName?: Maybe<Scalars['String']>;
  chassis?: Maybe<Array<ChassisEnum>>;
  colour?: Maybe<Array<ColourEnum>>;
  colourCode?: Maybe<Scalars['String']>;
  colourExterior?: Maybe<Array<ColourEnum>>;
  condition?: Maybe<Array<ConditionEnum>>;
  consumption?: Maybe<MinMaxFloatInput>;
  cylinders?: Maybe<MinMaxIntInput>;
  displacement?: Maybe<MinMaxIntInput>;
  driveAxle?: Maybe<Array<DriveAxleEnum>>;
  emissionCO2?: Maybe<MinMaxIntInput>;
  energyLabel?: Maybe<Array<EnergyLabelEnum>>;
  engineName?: Maybe<Scalars['String']>;
  enginePower?: Maybe<MinMaxIntInput>;
  equipment?: Maybe<Array<EquipmentInputType>>;
  euroStandard?: Maybe<MinMaxIntInput>;
  exportedTo?: Maybe<OfferExportEnum>;
  fuel?: Maybe<Array<FuelEnum>>;
  gearboxType?: Maybe<Array<GearboxTypeEnum>>;
  generation?: Maybe<Scalars['String']>;
  inStock?: Maybe<Scalars['Boolean']>;
  manufactureMonth?: Maybe<MinMaxIntInput>;
  manufactureYear?: Maybe<MinMaxIntInput>;
  mileage?: Maybe<MinMaxIntInput>;
  modelYear?: Maybe<MinMaxIntInput>;
  numberOfDoors?: Maybe<MinMaxIntInput>;
  numberOfElectricalEngines?: Maybe<MinMaxIntInput>;
  numberOfGears?: Maybe<MinMaxIntInput>;
  numberOfOwners?: Maybe<MinMaxIntInput>;
  numberOfSeats?: Maybe<MinMaxIntInput>;
  powerOfFrontEngine?: Maybe<MinMaxIntInput>;
  powerOfRearEngine?: Maybe<MinMaxIntInput>;
  price?: Maybe<MinMaxIntInput>;
  registrationNumber?: Maybe<Scalars['String']>;
  site?: Maybe<Scalars['String']>;
  sort?: Maybe<SortInput>;
  topSpeed?: Maybe<MinMaxIntInput>;
  torque?: Maybe<MinMaxIntInput>;
  type?: Maybe<Array<TypeEnum>>;
  upholstery?: Maybe<Array<UpholsteryEnum>>;
  vatDeductible?: Maybe<Scalars['Boolean']>;
  vin?: Maybe<Scalars['String']>;
};

export type FuelType = {
  __typename?: 'FuelType';
  key: FuelEnum;
  value: Scalars['String'];
};

export type GearboxTypeType = {
  __typename?: 'GearboxTypeType';
  key: GearboxTypeEnum;
  value: Scalars['String'];
};

export type LoginInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export enum ManualScraperType {
  Audi = 'audi',
  Blocket = 'blocket',
  Bytbil = 'bytbil',
  Otomoto = 'otomoto'
}

export type MinMaxFloat = {
  __typename?: 'MinMaxFloat';
  gte?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
};

export type MinMaxFloatInput = {
  gte?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
};

export type MinMaxInt = {
  __typename?: 'MinMaxInt';
  gte?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
};

export type MinMaxIntInput = {
  gte?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
};

export type Model = {
  __typename?: 'Model';
  key: Scalars['String'];
  value: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addDynamicTranslations: Scalars['Boolean'];
  contact: Scalars['Boolean'];
  createOneOffer: Offer;
  createOrUpdateAutoScout24Export: Scalars['Boolean'];
  createOrUpdateSautoExport: Scalars['Boolean'];
  createReview: Review;
  createUser: User;
  deleteAutoScout24Export: Scalars['ID'];
  deleteOfferImage: Scalars['Boolean'];
  deleteOneOffer: Scalars['ID'];
  deleteReview: Scalars['ID'];
  deleteSautoExport: Scalars['ID'];
  deleteUser: User;
  login: AuthPayload;
  logout: Scalars['Boolean'];
  migrateTranslations?: Maybe<Scalars['Boolean']>;
  moveImages: Offer;
  passwordRecoveryStepOne: Scalars['Boolean'];
  passwordRecoveryStepThree: AuthPayload;
  refreshToken: Token;
  request: Scalars['Boolean'];
  scrapeOfferManual: Scalars['ID'];
  translateDynamicTranslation: Scalars['Boolean'];
  tryAddMoreInformationToCar: Offer;
  updateOneOffer: Offer;
  updateReview: Review;
  updateUser: User;
  uploadOfferImage: Scalars['String'];
  uploadOfferImages: Offer;
};


export type MutationAddDynamicTranslationsArgs = {
  inputs: Array<DynamicTranslationInput>;
  siteName: Scalars['String'];
};


export type MutationContactArgs = {
  countryCode: CountryCodeEnum;
  email: Scalars['String'];
  message?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  phone: Scalars['String'];
};


export type MutationCreateOneOfferArgs = {
  countryCode: CountryCodeEnum;
  offer: OfferInput;
};


export type MutationCreateOrUpdateAutoScout24ExportArgs = {
  draft: Scalars['Boolean'];
  id: Scalars['ID'];
  offer: AutoScout24OfferInput;
};


export type MutationCreateOrUpdateSautoExportArgs = {
  draft: Scalars['Boolean'];
  id: Scalars['ID'];
  offer: SautoOfferInput;
};


export type MutationCreateReviewArgs = {
  car: Scalars['String'];
  countryCode: CountryCodeEnum;
  image: Scalars['FileUpload'];
  name: Scalars['String'];
  text: Scalars['String'];
};


export type MutationCreateUserArgs = {
  active?: Maybe<Scalars['Boolean']>;
  admin?: Maybe<Scalars['Boolean']>;
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationDeleteAutoScout24ExportArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteOfferImageArgs = {
  fileUrl: Scalars['String'];
  id: Scalars['ID'];
};


export type MutationDeleteOneOfferArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteReviewArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteSautoExportArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUserArgs = {
  id: Scalars['ID'];
};


export type MutationLoginArgs = {
  loginInput: LoginInput;
};


export type MutationMoveImagesArgs = {
  id: Scalars['ID'];
  images: Array<Scalars['String']>;
};


export type MutationPasswordRecoveryStepOneArgs = {
  countryCode: CountryCodeEnum;
  email: Scalars['String'];
};


export type MutationPasswordRecoveryStepThreeArgs = {
  hash: Scalars['String'];
  password: Scalars['String'];
};


export type MutationRequestArgs = {
  countryCode: CountryCodeEnum;
  detail?: Maybe<RequestDetailInput>;
  email: Scalars['String'];
  leasing?: Maybe<SautoLeasingInput>;
  message?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  offerId: Scalars['ID'];
  phone: Scalars['String'];
};


export type MutationScrapeOfferManualArgs = {
  type: ManualScraperType;
  url: Scalars['String'];
};


export type MutationTranslateDynamicTranslationArgs = {
  id: Scalars['ID'];
  translations?: Maybe<Array<TranslatedTermInput>>;
};


export type MutationTryAddMoreInformationToCarArgs = {
  id: Scalars['ID'];
};


export type MutationUpdateOneOfferArgs = {
  countryCode: CountryCodeEnum;
  id: Scalars['ID'];
  offer: OfferInput;
};


export type MutationUpdateReviewArgs = {
  car: Scalars['String'];
  countryCode: CountryCodeEnum;
  id: Scalars['ID'];
  image?: Maybe<Scalars['FileUpload']>;
  name: Scalars['String'];
  text: Scalars['String'];
};


export type MutationUpdateUserArgs = {
  active?: Maybe<Scalars['Boolean']>;
  admin?: Maybe<Scalars['Boolean']>;
  email: Scalars['String'];
  id: Scalars['ID'];
  password?: Maybe<Scalars['String']>;
};


export type MutationUploadOfferImageArgs = {
  file: Scalars['FileUpload'];
  id: Scalars['ID'];
};


export type MutationUploadOfferImagesArgs = {
  files: Array<Scalars['FileUpload']>;
  id: Scalars['ID'];
};

export type Offer = {
  __typename?: 'Offer';
  acceleration?: Maybe<Scalars['Float']>;
  brand?: Maybe<Brand>;
  carName?: Maybe<Scalars['String']>;
  chassis?: Maybe<ChassisType>;
  colour?: Maybe<ColourType>;
  colourCode?: Maybe<Scalars['String']>;
  colourExterior?: Maybe<ColourType>;
  condition?: Maybe<ConditionType>;
  consumption?: Maybe<Scalars['Float']>;
  countryCode: Scalars['String'];
  cylinders?: Maybe<Scalars['Int']>;
  deleted: Scalars['Boolean'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  detailedPrice: Array<DetailedPrice>;
  displacement?: Maybe<Scalars['Int']>;
  driveAxle?: Maybe<DriveAxleType>;
  emissionCO2?: Maybe<Scalars['Int']>;
  energyLabel?: Maybe<EnergyLabelType>;
  engineName?: Maybe<Scalars['String']>;
  enginePower?: Maybe<Scalars['Int']>;
  equipment: Array<EquipmentType>;
  euroStandard?: Maybe<Scalars['Int']>;
  exported: Scalars['Boolean'];
  exports: Array<OfferExport>;
  fuel?: Maybe<FuelType>;
  gearboxType?: Maybe<GearboxTypeType>;
  generation?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  images: Array<Scalars['String']>;
  imagesProcessed: Scalars['Boolean'];
  inStock: Scalars['Boolean'];
  manufactureMonth?: Maybe<Scalars['Int']>;
  manufactureYear?: Maybe<Scalars['Int']>;
  mileage?: Maybe<Scalars['Int']>;
  model?: Maybe<Model>;
  modelYear?: Maybe<Scalars['Int']>;
  note?: Maybe<Scalars['String']>;
  numberOfDoors?: Maybe<Scalars['Int']>;
  numberOfElectricalEngines?: Maybe<Scalars['Int']>;
  numberOfGears?: Maybe<Scalars['Int']>;
  numberOfOwners?: Maybe<Scalars['Int']>;
  numberOfSeats?: Maybe<Scalars['Int']>;
  originalImages: Array<Scalars['String']>;
  originalPrice: Scalars['Int'];
  powerOfFrontEngine?: Maybe<Scalars['Int']>;
  powerOfRearEngine?: Maybe<Scalars['Int']>;
  price: Scalars['Int'];
  priceCZ?: Maybe<Scalars['Int']>;
  priceDE?: Maybe<Scalars['Int']>;
  pricePL?: Maybe<Scalars['Int']>;
  priceSE?: Maybe<Scalars['Int']>;
  priceWithoutVat?: Maybe<Scalars['Int']>;
  registrationNumber?: Maybe<Scalars['String']>;
  site: Scalars['String'];
  topSpeed?: Maybe<Scalars['Int']>;
  torque?: Maybe<Scalars['Int']>;
  type?: Maybe<TypeType>;
  upholstery?: Maybe<UpholsteryType>;
  url: Scalars['String'];
  vatDeductible: Scalars['Boolean'];
  vin?: Maybe<Scalars['String']>;
  virtualTourUrl?: Maybe<Scalars['String']>;
  weight?: Maybe<Scalars['Int']>;
};

export type OfferExport = {
  __typename?: 'OfferExport';
  createdAt: Scalars['DateTime'];
  error?: Maybe<Scalars['String']>;
  processed: Scalars['Boolean'];
  processing: Scalars['Boolean'];
  toDelete: Scalars['Boolean'];
  toUpdate: Scalars['Boolean'];
  type: OfferExportEnum;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type OfferInit = {
  __typename?: 'OfferInit';
  chassis: Array<ChassisType>;
  colour: Array<ColourType>;
  colourExterior?: Maybe<Array<ColourType>>;
  condition: Array<ConditionType>;
  driveAxle: Array<DriveAxleType>;
  energyLabel: Array<EnergyLabelType>;
  equipment: Array<EquipmentType>;
  fuel: Array<FuelType>;
  gearboxType: Array<GearboxTypeType>;
  site: Array<Dial>;
  type: Array<TypeType>;
  upholstery: Array<UpholsteryType>;
};

export type OfferInput = {
  acceleration?: Maybe<Scalars['Float']>;
  brand?: Maybe<Scalars['String']>;
  carName?: Maybe<Scalars['String']>;
  chassis?: Maybe<ChassisEnum>;
  colour?: Maybe<ColourEnum>;
  colourCode?: Maybe<Scalars['String']>;
  colourExterior?: Maybe<ColourEnum>;
  condition?: Maybe<ConditionEnum>;
  consumption?: Maybe<Scalars['Float']>;
  countryCode?: Maybe<CountryCodeEnum>;
  cylinders?: Maybe<Scalars['Int']>;
  deleted?: Maybe<Scalars['Boolean']>;
  displacement?: Maybe<Scalars['Int']>;
  driveAxle?: Maybe<DriveAxleEnum>;
  emissionCO2?: Maybe<Scalars['Int']>;
  energyLabel?: Maybe<EnergyLabelEnum>;
  engineName?: Maybe<Scalars['String']>;
  enginePower?: Maybe<Scalars['Int']>;
  equipment: Array<EquipmentEnum>;
  euroStandard?: Maybe<Scalars['Int']>;
  fuel?: Maybe<FuelEnum>;
  gearboxType?: Maybe<GearboxTypeEnum>;
  generation?: Maybe<Scalars['String']>;
  inStock?: Maybe<Scalars['Boolean']>;
  manufactureMonth?: Maybe<Scalars['Int']>;
  manufactureYear?: Maybe<Scalars['Int']>;
  mileage?: Maybe<Scalars['Int']>;
  model?: Maybe<Scalars['String']>;
  modelYear?: Maybe<Scalars['Int']>;
  note?: Maybe<Scalars['String']>;
  numberOfDoors?: Maybe<Scalars['Int']>;
  numberOfElectricalEngines?: Maybe<Scalars['Int']>;
  numberOfGears?: Maybe<Scalars['Int']>;
  numberOfOwners?: Maybe<Scalars['Int']>;
  numberOfSeats?: Maybe<Scalars['Int']>;
  powerOfFrontEngine?: Maybe<Scalars['Int']>;
  powerOfRearEngine?: Maybe<Scalars['Int']>;
  priceCZ?: Maybe<Scalars['Int']>;
  priceDE?: Maybe<Scalars['Int']>;
  pricePL?: Maybe<Scalars['Int']>;
  priceSE?: Maybe<Scalars['Int']>;
  registrationNumber?: Maybe<Scalars['String']>;
  topSpeed?: Maybe<Scalars['Int']>;
  torque?: Maybe<Scalars['Int']>;
  type?: Maybe<TypeEnum>;
  upholstery?: Maybe<UpholsteryEnum>;
  vatDeductible?: Maybe<Scalars['Boolean']>;
  vin?: Maybe<Scalars['String']>;
  virtualTourUrl?: Maybe<Scalars['String']>;
  weight?: Maybe<Scalars['Int']>;
};

export type OffersSelection = {
  __typename?: 'OffersSelection';
  offers: Array<Offer>;
  pagination: Pagination;
};

export type Pagination = {
  __typename?: 'Pagination';
  count: Scalars['Int'];
  limit: Scalars['Int'];
  offset: Scalars['Int'];
};

export type PaginationInput = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type Query = {
  __typename?: 'Query';
  autoScout24Dials: AutoScout24Dials;
  autoScout24Export: AutoScout24Offer;
  brands: Array<Brand>;
  brandsAndModels: Array<BrandsAndModels>;
  countOffers: Scalars['Int'];
  currentUser: User;
  dial: Array<Dial>;
  dialTypes: Array<DialTypeItem>;
  dials: Dials;
  filter: Filter;
  getDynamicTranslations: DynamicTranslationSelection;
  models: Array<Model>;
  offer: Offer;
  offerInit: OfferInit;
  offers: OffersSelection;
  passwordRecoveryStepTwo: Scalars['Boolean'];
  randomReviews: Array<Review>;
  review: Review;
  reviews: Array<Review>;
  sautoDials: SautoDials;
  sautoExport: SautoOffer;
  sautoLeasing: Array<SautoLeasing>;
  similarOffers: OffersSelection;
  siteNames: Array<Scalars['String']>;
  user: User;
  users: Array<User>;
};


export type QueryAutoScout24ExportArgs = {
  offerId: Scalars['ID'];
};


export type QueryBrandsArgs = {
  countryCode: CountryCodeEnum;
};


export type QueryBrandsAndModelsArgs = {
  countryCode: CountryCodeEnum;
};


export type QueryCountOffersArgs = {
  countryCode: CountryCodeEnum;
  filter: FilterInput;
};


export type QueryDialArgs = {
  countryCode: CountryCodeEnum;
  type: Scalars['String'];
};


export type QueryDialsArgs = {
  countryCode: CountryCodeEnum;
};


export type QueryFilterArgs = {
  countryCode: CountryCodeEnum;
};


export type QueryGetDynamicTranslationsArgs = {
  filter?: Maybe<DynamicTranslationFilterInput>;
  pagination?: Maybe<PaginationInput>;
};


export type QueryModelsArgs = {
  brand: Scalars['String'];
  countryCode: CountryCodeEnum;
};


export type QueryOfferArgs = {
  countryCode: CountryCodeEnum;
  id: Scalars['ID'];
};


export type QueryOfferInitArgs = {
  countryCode?: Maybe<CountryCodeEnum>;
};


export type QueryOffersArgs = {
  countryCode: CountryCodeEnum;
  filter: FilterInput;
  limit: Scalars['Int'];
  offset: Scalars['Int'];
};


export type QueryPasswordRecoveryStepTwoArgs = {
  hash: Scalars['String'];
};


export type QueryRandomReviewsArgs = {
  count: Scalars['Int'];
  countryCode: CountryCodeEnum;
};


export type QueryReviewArgs = {
  countryCode: CountryCodeEnum;
  id: Scalars['ID'];
};


export type QueryReviewsArgs = {
  countryCode?: Maybe<CountryCodeEnum>;
};


export type QuerySautoExportArgs = {
  offerId: Scalars['ID'];
};


export type QuerySautoLeasingArgs = {
  downPaymentPercentage: Scalars['Int'];
  offerId: Scalars['ID'];
};


export type QuerySimilarOffersArgs = {
  countryCode: CountryCodeEnum;
  limit: Scalars['Int'];
  offerId: Scalars['ID'];
  offset: Scalars['Int'];
};


export type QueryUserArgs = {
  id: Scalars['ID'];
};

export type RequestDetail = {
  __typename?: 'RequestDetail';
  ceramicPaintProtection?: Maybe<Scalars['Boolean']>;
  disassemblyOfOriginalEquipmentElements?: Maybe<Scalars['Boolean']>;
  enginePowerAdjustment?: Maybe<Scalars['Boolean']>;
  extendedWaranty?: Maybe<Scalars['Boolean']>;
  financing?: Maybe<Scalars['Boolean']>;
  independentHeating?: Maybe<Scalars['Boolean']>;
  insuarance?: Maybe<Scalars['Boolean']>;
  rugsAndTubsToTrunk?: Maybe<Scalars['Boolean']>;
  stickers?: Maybe<Scalars['Boolean']>;
  towingDevice?: Maybe<Scalars['Boolean']>;
};

export type RequestDetailInput = {
  ceramicPaintProtection?: Maybe<Scalars['Boolean']>;
  disassemblyOfOriginalEquipmentElements?: Maybe<Scalars['Boolean']>;
  enginePowerAdjustment?: Maybe<Scalars['Boolean']>;
  extendedWaranty?: Maybe<Scalars['Boolean']>;
  financing?: Maybe<Scalars['Boolean']>;
  independentHeating?: Maybe<Scalars['Boolean']>;
  insuarance?: Maybe<Scalars['Boolean']>;
  rugsAndTubsToTrunk?: Maybe<Scalars['Boolean']>;
  stickers?: Maybe<Scalars['Boolean']>;
  towingDevice?: Maybe<Scalars['Boolean']>;
};

export type Review = {
  __typename?: 'Review';
  car?: Maybe<Scalars['String']>;
  countryCode?: Maybe<CountryCodeEnum>;
  id: Scalars['ID'];
  image?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
};

export type SautoDial = {
  __typename?: 'SautoDial';
  key: Scalars['Int'];
  value: Scalars['String'];
};

export type SautoDials = {
  __typename?: 'SautoDials';
  airbags: Array<SautoDial>;
  airconditions: Array<SautoDial>;
  bodies: Array<SautoDial>;
  carConditions: Array<SautoDial>;
  colorTones: Array<SautoDial>;
  colorTypes: Array<SautoDial>;
  colors: Array<SautoDial>;
  equipmentCategories: Array<EquipmentCategory>;
  equipments: Array<SautoDial>;
  fuelList: Array<SautoDial>;
  gearboxList: Array<SautoDial>;
  manufacturers: Array<SautoDial>;
  models: Array<SautoDial>;
  modelsByManufacturers: Array<SautoModelsByManufacturer>;
  states: Array<SautoDial>;
};

export type SautoLeasing = {
  __typename?: 'SautoLeasing';
  accidentInsuranceCompany: Scalars['String'];
  carInsuranceCompany: Scalars['String'];
  downPayment: Scalars['Float'];
  interestRate: Scalars['Float'];
  lastPayment: Scalars['Float'];
  monthlyPriceWithouInsuarance: Scalars['Float'];
  numberOfInstallments: Scalars['Float'];
  price: Scalars['Float'];
  productName: Scalars['String'];
  rpsnRate: Scalars['Float'];
  totalMonthlyPrice: Scalars['Float'];
  totalPrice: Scalars['Float'];
  yearlyAccidentInsuarancePrice: Scalars['Float'];
  yearlyCarInsuarancePrice: Scalars['Float'];
};

export type SautoLeasingInput = {
  accidentInsuranceCompany: Scalars['String'];
  carInsuranceCompany: Scalars['String'];
  downPayment: Scalars['Float'];
  interestRate: Scalars['Float'];
  lastPayment: Scalars['Float'];
  monthlyPriceWithouInsuarance: Scalars['Float'];
  numberOfInstallments: Scalars['Float'];
  price: Scalars['Float'];
  productName: Scalars['String'];
  rpsnRate: Scalars['Float'];
  totalMonthlyPrice: Scalars['Float'];
  totalPrice: Scalars['Float'];
  yearlyAccidentInsuarancePrice: Scalars['Float'];
  yearlyCarInsuarancePrice: Scalars['Float'];
};

export type SautoModelsByManufacturer = {
  __typename?: 'SautoModelsByManufacturer';
  manufacturerId: Scalars['Int'];
  models: Array<SautoDial>;
};

export type SautoOffer = {
  __typename?: 'SautoOffer';
  equipmentIds: Array<Scalars['Int']>;
  imageUrls: Array<Scalars['String']>;
  optionalParameters: SautoOptionalParametersType;
  requiredParameters: SautoRequiredParametersType;
};

export type SautoOfferInput = {
  equipmentIds: Array<Scalars['Int']>;
  imageUrls: Array<Scalars['String']>;
  optionalParameters: SautoOptionalParametersInputType;
  requiredParameters: SautoRequiredParametersInputType;
};

export type SautoOptionalParametersInputType = {
  airbag?: Maybe<Scalars['Int']>;
  aircondition?: Maybe<Scalars['Int']>;
  attractive_offer?: Maybe<Scalars['Int']>;
  capacity?: Maybe<Scalars['Int']>;
  car_status?: Maybe<Scalars['Int']>;
  door?: Maybe<Scalars['Int']>;
  engine_power?: Maybe<Scalars['Int']>;
  gas_mileage?: Maybe<Scalars['Float']>;
  gearbox?: Maybe<Scalars['Int']>;
  note?: Maybe<Scalars['String']>;
  perex?: Maybe<Scalars['String']>;
  price_notice?: Maybe<Scalars['String']>;
  service_book?: Maybe<Scalars['Int']>;
  type_info?: Maybe<Scalars['String']>;
  vat_deductable?: Maybe<Scalars['Int']>;
  weight?: Maybe<Scalars['Int']>;
};

export type SautoOptionalParametersType = {
  __typename?: 'SautoOptionalParametersType';
  airbag?: Maybe<Scalars['Int']>;
  aircondition?: Maybe<Scalars['Int']>;
  attractive_offer?: Maybe<Scalars['Int']>;
  capacity?: Maybe<Scalars['Int']>;
  car_status?: Maybe<Scalars['Int']>;
  door?: Maybe<Scalars['Int']>;
  engine_power?: Maybe<Scalars['Int']>;
  gas_mileage?: Maybe<Scalars['Float']>;
  gearbox?: Maybe<Scalars['Int']>;
  note?: Maybe<Scalars['String']>;
  perex?: Maybe<Scalars['String']>;
  price_notice?: Maybe<Scalars['String']>;
  service_book?: Maybe<Scalars['Int']>;
  type_info?: Maybe<Scalars['String']>;
  vat_deductable?: Maybe<Scalars['Int']>;
  weight?: Maybe<Scalars['Int']>;
};

export type SautoRequiredParametersInputType = {
  body_id?: Maybe<Scalars['Int']>;
  color?: Maybe<Scalars['Int']>;
  condition?: Maybe<Scalars['Int']>;
  dph?: Maybe<Scalars['Int']>;
  engine_volume?: Maybe<Scalars['Int']>;
  fuel?: Maybe<Scalars['Int']>;
  kind_id?: Maybe<Scalars['Int']>;
  made_date?: Maybe<Scalars['String']>;
  manufacturer_id?: Maybe<Scalars['Int']>;
  model_id?: Maybe<Scalars['Int']>;
  price?: Maybe<Scalars['Int']>;
  run_date?: Maybe<Scalars['String']>;
  state_id?: Maybe<Scalars['Int']>;
  tachometr?: Maybe<Scalars['Int']>;
  tachometr_unit?: Maybe<Scalars['Int']>;
  vin?: Maybe<Scalars['String']>;
};

export type SautoRequiredParametersType = {
  __typename?: 'SautoRequiredParametersType';
  body_id?: Maybe<Scalars['Int']>;
  color?: Maybe<Scalars['Int']>;
  condition?: Maybe<Scalars['Int']>;
  dph?: Maybe<Scalars['Int']>;
  engine_volume?: Maybe<Scalars['Int']>;
  fuel?: Maybe<Scalars['Int']>;
  kind_id?: Maybe<Scalars['Int']>;
  made_date?: Maybe<Scalars['String']>;
  manufacturer_id?: Maybe<Scalars['Int']>;
  model_id?: Maybe<Scalars['Int']>;
  price?: Maybe<Scalars['Int']>;
  run_date?: Maybe<Scalars['String']>;
  state_id?: Maybe<Scalars['Int']>;
  tachometr?: Maybe<Scalars['Int']>;
  tachometr_unit?: Maybe<Scalars['Int']>;
  vin?: Maybe<Scalars['String']>;
};

export type SignUpInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type SortInput = {
  by?: Maybe<Scalars['String']>;
  order?: Maybe<SortEnum>;
};

export type TermKeyValue = {
  __typename?: 'TermKeyValue';
  key: Scalars['String'];
  value: Scalars['String'];
};

/** refreshToken is provided as http-only cookie */
export type Token = {
  __typename?: 'Token';
  accessToken: Scalars['String'];
  refreshToken: Scalars['String'];
};

export type TranslatedTerm = {
  __typename?: 'TranslatedTerm';
  dialType: DialTypeKeyValue;
  term: TermKeyValue;
};

export type TranslatedTermInput = {
  dialType: Scalars['String'];
  term: Scalars['String'];
};

export type TypeType = {
  __typename?: 'TypeType';
  key: TypeEnum;
  value: Scalars['String'];
};

export type UpholsteryType = {
  __typename?: 'UpholsteryType';
  key: UpholsteryEnum;
  value: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  active: Scalars['Boolean'];
  admin?: Maybe<Scalars['Boolean']>;
  email: Scalars['String'];
  id: Scalars['ID'];
};

export enum ChassisEnum {
  ChassisCabriolet = 'CHASSIS_CABRIOLET',
  ChassisCoupe = 'CHASSIS_COUPE',
  ChassisHatchbag = 'CHASSIS_HATCHBAG',
  ChassisLcv = 'CHASSIS_LCV',
  ChassisMpv = 'CHASSIS_MPV',
  ChassisOffroad = 'CHASSIS_OFFROAD',
  ChassisOther = 'CHASSIS_OTHER',
  ChassisPickup = 'CHASSIS_PICKUP',
  ChassisRoadster = 'CHASSIS_ROADSTER',
  ChassisSedan = 'CHASSIS_SEDAN',
  ChassisStationWagon = 'CHASSIS_STATION_WAGON',
  ChassisSuv = 'CHASSIS_SUV',
  ChassisVan = 'CHASSIS_VAN'
}

export enum ColourEnum {
  ColourBeige = 'COLOUR_BEIGE',
  ColourBlack = 'COLOUR_BLACK',
  ColourBlue = 'COLOUR_BLUE',
  ColourBronze = 'COLOUR_BRONZE',
  ColourBrown = 'COLOUR_BROWN',
  ColourGolden = 'COLOUR_GOLDEN',
  ColourGreen = 'COLOUR_GREEN',
  ColourGrey = 'COLOUR_GREY',
  ColourOrange = 'COLOUR_ORANGE',
  ColourOther = 'COLOUR_OTHER',
  ColourPurple = 'COLOUR_PURPLE',
  ColourRed = 'COLOUR_RED',
  ColourRose = 'COLOUR_ROSE',
  ColourSilver = 'COLOUR_SILVER',
  ColourWhite = 'COLOUR_WHITE',
  ColourYellow = 'COLOUR_YELLOW'
}

export enum ConditionEnum {
  ConditionDemo = 'CONDITION_DEMO',
  ConditionNew = 'CONDITION_NEW',
  ConditionUsed = 'CONDITION_USED'
}

export enum CountryCodeEnum {
  At = 'AT',
  Be = 'BE',
  Cz = 'CZ',
  De = 'DE',
  Es = 'ES',
  Fr = 'FR',
  It = 'IT',
  Lu = 'LU',
  Nl = 'NL',
  Pl = 'PL',
  Pt = 'PT',
  Se = 'SE'
}

export enum DriveAxleEnum {
  DriveAxle_2Wd = 'DRIVE_AXLE_2WD',
  DriveAxle_4Wd = 'DRIVE_AXLE_4WD',
  DriveAxleAwd = 'DRIVE_AXLE_AWD',
  DriveAxleOther = 'DRIVE_AXLE_OTHER'
}

export enum EnergyLabelEnum {
  A = 'A',
  APlus = 'APlus',
  B = 'B',
  C = 'C',
  D = 'D',
  E = 'E',
  F = 'F',
  G = 'G'
}

export enum EquipmentEnum {
  Abs = 'abs',
  AcousticParkingAssistant = 'acousticParkingAssistant',
  AcousticWindshield = 'acousticWindshield',
  ActiveHood = 'activeHood',
  AdaptiveCruiseControl = 'adaptiveCruiseControl',
  AdaptiveHeadlights = 'adaptiveHeadlights',
  AdaptiveSuspension = 'adaptiveSuspension',
  AdjustableSeats = 'adjustableSeats',
  AdjustableSteeringWheel = 'adjustableSteeringWheel',
  AirConditionedPassengerCompartment = 'airConditionedPassengerCompartment',
  AirConditioning = 'airConditioning',
  AirSuspension = 'airSuspension',
  Alarm = 'alarm',
  AlloyWheels15 = 'alloyWheels15',
  AlloyWheels16 = 'alloyWheels16',
  AlloyWheels17 = 'alloyWheels17',
  AlloyWheels18 = 'alloyWheels18',
  AlloyWheels19 = 'alloyWheels19',
  AlloyWheels20 = 'alloyWheels20',
  AlloyWheels21 = 'alloyWheels21',
  AlloyWheels22 = 'alloyWheels22',
  AlloyWheels23 = 'alloyWheels23',
  AmbientLighting = 'ambientLighting',
  AndroidAuto = 'androidAuto',
  AppleCarPlay = 'appleCarPlay',
  Armrest = 'armrest',
  AutomaticAirConditioning = 'automaticAirConditioning',
  AutomaticEmergencyCall = 'automaticEmergencyCall',
  AutomaticHighBeams = 'automaticHighBeams',
  Aux = 'aux',
  BacklitBoardingRails = 'backlitBoardingRails',
  BehindTheVehicleWarningSystem = 'behindTheVehicleWarningSystem',
  BiXenonHeadlights = 'biXenonHeadlights',
  BlindSpotMonitoring = 'blindSpotMonitoring',
  Bluetooth = 'bluetooth',
  BrandRecognitionSystem = 'brandRecognitionSystem',
  Camera360 = 'camera360',
  Cd = 'cd',
  CdChanger = 'cdChanger',
  CentralLocking = 'centralLocking',
  ChassisStiffnessRegulation = 'chassisStiffnessRegulation',
  ChildSafetyLock = 'childSafetyLock',
  ClearHeadUpDisplayHud = 'clearHeadUpDisplayHud',
  Clock = 'clock',
  CollisionWarningSystem = 'collisionWarningSystem',
  ColorDisplay = 'colorDisplay',
  ControlSelectedCarFunctionsWithGestures = 'controlSelectedCarFunctionsWithGestures',
  CruiseControl = 'cruiseControl',
  CruiseControlInStopGoFunction = 'cruiseControlInStopGoFunction',
  DabDigitalRadio = 'dabDigitalRadio',
  DaytimeRunningLights = 'daytimeRunningLights',
  DeactivatingTheFrontPassengerAirbag = 'deactivatingTheFrontPassengerAirbag',
  Display6 = 'display6',
  Display7 = 'display7',
  Display8 = 'display8',
  Display9 = 'display9',
  Display10 = 'display10',
  Display11 = 'display11',
  Display12 = 'display12',
  Display15 = 'display15',
  Display20 = 'display20',
  DrinkHolderAtTheBack = 'drinkHolderAtTheBack',
  DrinkHolderInFront = 'drinkHolderInFront',
  DriverSAirbag = 'driverSAirbag',
  DualZoneAirConditioning = 'dualZoneAirConditioning',
  Dvd = 'dvd',
  ElControlledExteriorMirrors = 'elControlledExteriorMirrors',
  ElControlledPanoramicRoof = 'elControlledPanoramicRoof',
  ElFoldingExteriorMirrors = 'elFoldingExteriorMirrors',
  ElectricParkingBrake = 'electricParkingBrake',
  ElectricSunVisor = 'electricSunVisor',
  ElectricTrunkControl = 'electricTrunkControl',
  ElectricallyAdjustableLumbarSupport = 'electricallyAdjustableLumbarSupport',
  ElectricallyAdjustableRearSeats = 'electricallyAdjustableRearSeats',
  ElectricallyAdjustableSeats = 'electricallyAdjustableSeats',
  ElectricallyAdjustableSeatsWithMemory = 'electricallyAdjustableSeatsWithMemory',
  ElectricallyOperatedSunroof = 'electricallyOperatedSunroof',
  ElectronicDifferentialLock = 'electronicDifferentialLock',
  EmergencyBrakeAssistant = 'emergencyBrakeAssistant',
  EmergencyStopSystem = 'emergencyStopSystem',
  Esp = 'esp',
  FatigueRecognitionSystem = 'fatigueRecognitionSystem',
  FogLights = 'fogLights',
  FoldingPassengerSeat = 'foldingPassengerSeat',
  FourZoneAirConditioning = 'fourZoneAirConditioning',
  FrontParkingSensors = 'frontParkingSensors',
  FullFledgedSpareWheel = 'fullFledgedSpareWheel',
  GearIndicator = 'gearIndicator',
  GestureControl = 'gestureControl',
  HalogenHeadlights = 'halogenHeadlights',
  Handsfree = 'handsfree',
  HeadAirbags = 'headAirbags',
  HeatedDriverSSeat = 'heatedDriverSSeat',
  HeatedExteriorMirrors = 'heatedExteriorMirrors',
  HeatedFrontSeats = 'heatedFrontSeats',
  HeatedRearSeats = 'heatedRearSeats',
  HeatedSeats = 'heatedSeats',
  HeatedSteeringWheel = 'heatedSteeringWheel',
  HeatedWindshield = 'heatedWindshield',
  HeightAdjustableDriverSSeat = 'heightAdjustableDriverSSeat',
  HillStartAssist = 'hillStartAssist',
  HillStartAssistDac = 'hillStartAssistDac',
  Immobilizer = 'immobilizer',
  IndependentHeating = 'independentHeating',
  InductiveChargingForSmartphones = 'inductiveChargingForSmartphones',
  IntegratedMusicStreaming = 'integratedMusicStreaming',
  Isofix = 'isofix',
  IsofixOnTheFrontPassengerSeat = 'isofixOnTheFrontPassengerSeat',
  KeylessAccess = 'keylessAccess',
  KeylessStart = 'keylessStart',
  KneeAirbags = 'kneeAirbags',
  LaneKeepingAssistant = 'laneKeepingAssistant',
  LaserHeadlights = 'laserHeadlights',
  LeatherSteeringWheel = 'leatherSteeringWheel',
  LedDaytimeRunningLights = 'ledDaytimeRunningLights',
  LedHeadlights = 'ledHeadlights',
  LightAlloyWheels = 'lightAlloyWheels',
  LightSensor = 'lightSensor',
  LumbarSupport = 'lumbarSupport',
  MakeupMirror = 'makeupMirror',
  ManualAirConditioning = 'manualAirConditioning',
  MassageSeats = 'massageSeats',
  MechanicalSunVisor = 'mechanicalSunVisor',
  MetalPedals = 'metalPedals',
  Metallic = 'metallic',
  Mp3 = 'mp3',
  MultifunctionSteeringWheel = 'multifunctionSteeringWheel',
  Navigation = 'navigation',
  NightVisionAssistant = 'nightVisionAssistant',
  ObstacleRecognitionSystem = 'obstacleRecognitionSystem',
  OnboardComputer = 'onboardComputer',
  PanoramicRoof = 'panoramicRoof',
  ParkingAssistant = 'parkingAssistant',
  ParkingCamera = 'parkingCamera',
  ParkingSensors = 'parkingSensors',
  PassengerAirbag = 'passengerAirbag',
  PedestrianAndCyclistRecognitionSystem = 'pedestrianAndCyclistRecognitionSystem',
  PowerSteering = 'powerSteering',
  PowerWindows = 'powerWindows',
  Radio = 'radio',
  RailSystemInTheLuggageCompartment = 'railSystemInTheLuggageCompartment',
  RainSensor = 'rainSensor',
  RearLedHeadlights = 'rearLedHeadlights',
  RearParkingSensors = 'rearParkingSensors',
  RearSeatArmrest = 'rearSeatArmrest',
  RearWindowBlinds = 'rearWindowBlinds',
  RemoteCentralLocking = 'remoteCentralLocking',
  RemoteVehicleManagementViaAMobileApplication = 'remoteVehicleManagementViaAMobileApplication',
  RemovableRearSeats = 'removableRearSeats',
  RemovableTowingDevice = 'removableTowingDevice',
  RoofRails = 'roofRails',
  SeatVentilation = 'seatVentilation',
  SelfDimmingRearViewMirror = 'selfDimmingRearViewMirror',
  SelfLockingDifferential = 'selfLockingDifferential',
  SetOfWinterBikes = 'setOfWinterBikes',
  SetOfWinterLightAlloyWheels = 'setOfWinterLightAlloyWheels',
  ShiftPaddlesUnderTheSteeringWheel = 'shiftPaddlesUnderTheSteeringWheel',
  SideAirbags = 'sideAirbags',
  SkiBox = 'skiBox',
  SlidingDoors = 'slidingDoors',
  SmokingPackage = 'smokingPackage',
  Socket230V = 'socket230V',
  SocketAtTheBack12V = 'socketAtTheBack12V',
  SocketAtTheFront12V = 'socketAtTheFront12V',
  SocketInTheCase12V = 'socketInTheCase12V',
  SoundSystem = 'soundSystem',
  Speedmeter = 'speedmeter',
  SportsSeats = 'sportsSeats',
  SportsSteeringWheel = 'sportsSteeringWheel',
  SportsSuspension = 'sportsSuspension',
  StartStopSystem = 'startStopSystem',
  SteelWheels = 'steelWheels',
  Subwoofer = 'subwoofer',
  SummerTires = 'summerTires',
  Sunroof = 'sunroof',
  Thermometer = 'thermometer',
  ThreeZoneAirConditioning = 'threeZoneAirConditioning',
  TintedGlass = 'tintedGlass',
  TirePressureCheck = 'tirePressureCheck',
  TouchDisplay = 'touchDisplay',
  TowingEquipment = 'towingEquipment',
  TractionControlAsr = 'tractionControlAsr',
  TravelSpareWheel = 'travelSpareWheel',
  Tv = 'tv',
  Usb = 'usb',
  VoiceControl = 'voiceControl',
  WiFiHotspot = 'wiFiHotspot',
  Winch = 'winch',
  WinterTyres = 'winterTyres',
  XenonHeadlights = 'xenonHeadlights',
  YearRoundTires = 'yearRoundTires'
}

export enum FuelEnum {
  FuelCng = 'FUEL_CNG',
  FuelDiesel = 'FUEL_DIESEL',
  FuelE85 = 'FUEL_E85',
  FuelElectric = 'FUEL_ELECTRIC',
  FuelHybrid = 'FUEL_HYBRID',
  FuelHybridElectricDiesel = 'FUEL_HYBRID_ELECTRIC_DIESEL',
  FuelHybridElectricPetrol = 'FUEL_HYBRID_ELECTRIC_PETROL',
  FuelHydrogen = 'FUEL_HYDROGEN',
  FuelLpg = 'FUEL_LPG',
  FuelOther = 'FUEL_OTHER',
  FuelPetrol = 'FUEL_PETROL'
}

export enum GearboxTypeEnum {
  GearboxTypeAutomatic = 'GEARBOX_TYPE_AUTOMATIC',
  GearboxTypeManual = 'GEARBOX_TYPE_MANUAL'
}

export enum OfferExportEnum {
  Autoscout24 = 'AUTOSCOUT24',
  Sauto = 'SAUTO'
}

export enum SortEnum {
  Asc = 'asc',
  Desc = 'desc'
}

export enum TypeEnum {
  TypeCommercial = 'TYPE_COMMERCIAL',
  TypeLorry = 'TYPE_LORRY',
  TypeMotorcycle = 'TYPE_MOTORCYCLE',
  TypeMotorHome = 'TYPE_MOTOR_HOME',
  TypePersonal = 'TYPE_PERSONAL',
  TypeTrailer = 'TYPE_TRAILER'
}

export enum UpholsteryEnum {
  UpholsteryAlcantra = 'UPHOLSTERY_ALCANTRA',
  UpholsteryFabric = 'UPHOLSTERY_FABRIC',
  UpholsteryFabricAlcantra = 'UPHOLSTERY_FABRIC_ALCANTRA',
  UpholsteryFabricLeather = 'UPHOLSTERY_FABRIC_LEATHER',
  UpholsteryLeather = 'UPHOLSTERY_LEATHER',
  UpholsteryLeatherAlcantra = 'UPHOLSTERY_LEATHER_ALCANTRA',
  UpholsteryVelour = 'UPHOLSTERY_VELOUR'
}

export type DialTypesQueryVariables = Exact<{ [key: string]: never; }>;


export type DialTypesQuery = { __typename?: 'Query', dialTypes: Array<{ __typename?: 'DialTypeItem', key: string, value: string }> };


export const DialTypesDocument = gql`
    query DialTypes {
  dialTypes {
    key
    value
  }
}
    `;

/**
 * __useDialTypesQuery__
 *
 * To run a query within a React component, call `useDialTypesQuery` and pass it any options that fit your needs.
 * When your component renders, `useDialTypesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDialTypesQuery({
 *   variables: {
 *   },
 * });
 */
export function useDialTypesQuery(baseOptions?: Apollo.QueryHookOptions<DialTypesQuery, DialTypesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<DialTypesQuery, DialTypesQueryVariables>(DialTypesDocument, options);
      }
export function useDialTypesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<DialTypesQuery, DialTypesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<DialTypesQuery, DialTypesQueryVariables>(DialTypesDocument, options);
        }
export type DialTypesQueryHookResult = ReturnType<typeof useDialTypesQuery>;
export type DialTypesLazyQueryHookResult = ReturnType<typeof useDialTypesLazyQuery>;
export type DialTypesQueryResult = Apollo.QueryResult<DialTypesQuery, DialTypesQueryVariables>;
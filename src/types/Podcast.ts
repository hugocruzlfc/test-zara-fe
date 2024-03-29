export interface Podcast {
  [PodcastType.name]: ImName;
  [PodcastType.image]: ImImage[];
  summary: Summary;
  [PodcastType.price]: ImPrice;
  [PodcastType.contentType]: ImContentType;
  rights: Rights;
  title: Title;
  link: Link;
  id: Id;
  [PodcastType.artist]: ImArtist;
  category: Category;
  [PodcastType.releaseDate]: ImReleaseDate;
}

export enum PodcastType {
  artist = "im:artist",
  contentType = "im:contentType",
  image = "im:image",
  name = "im:name",
  price = "im:price",
  releaseDate = "im:releaseDate",
  id = "im:id",
}

export interface Name {
  label: string;
}

export interface Uri {
  label: string;
}

export interface Author {
  name: Name;
  uri: Uri;
}

export interface ImName {
  label: string;
}

export interface Attributes {
  height: string;
}

export interface ImImage {
  label: string;
  attributes: Attributes;
}

export interface Summary {
  label: string;
}

export interface Attributes2 {
  amount: string;
  currency: string;
}

export interface ImPrice {
  label: string;
  attributes: Attributes2;
}

export interface Attributes3 {
  term: string;
  label: string;
}

export interface ImContentType {
  attributes: Attributes3;
}

export interface Rights {
  label: string;
}

export interface Title {
  label: string;
}

export interface Attributes4 {
  rel: string;
  type: string;
  href: string;
}

export interface Link {
  attributes: Attributes4;
}

export interface Attributes5 {
  [PodcastType.id]: string;
}

export interface Id {
  label: string;
  attributes: Attributes5;
}

export interface Attributes6 {
  href: string;
}

export interface ImArtist {
  label: string;
  attributes: Attributes6;
}

export interface Attributes7 {
  id: string;
  term: string;
  scheme: string;
  label: string;
}

export interface Category {
  attributes: Attributes7;
}

export interface Attributes8 {
  label: string;
}

export interface ImReleaseDate {
  label: string;
  attributes: Attributes8;
}

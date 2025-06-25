export interface AuthFormValues {
  email: string;
  code1: string;
  code2: string;
  code3: string;
  code4: string;
  company_name: string;
  gender: string;
  phone: string;
  dob: string;
  password: string;
  confirm_password: string;
  image?: File;
  first_name: string;
  last_name: string;
}

export interface User {
  email: string;
  company_name: string;
  phone: string;
  image: string;
  role: string;
  company_info: string;
  first_name: string;
  last_name: string;
  gender: string;
  dob: string;
  _id: string;
}

export interface middlewareShape {
  _id: string;
  email: string;
  first_name: string;
  last_name: string;
  phone: number;
  role: string;
  iat: number;
  exp: number;
}

export interface createEvent {
  event_name: string;
  description: string;
  date: string;
  time: string;
  city: string;
  venue: string;
  total_seats: number;
  ticketPrice: number;
  type: string;
  images: File[] | null;
  artistname: string;
  artistrole: string;
  category: string;
  videos: File[] | null;
  validAge: boolean;
  online_link: string | null;
}

export interface Event {
  _id: string;
  artistname: string;
  artistrole: string;
  available_seats: number;
  booked_seats: number;
  category: string;
  createdAt: string;
  date: string;
  description: string;
  event_name: string;
  images: string[];
  isDeleted: boolean;
  location: {
    venue: string;
    city: string;
  };
  online_link: string | null;
  organizerId: string;
  organizerName: string;
  status: string;
  ticketPrice: number;
  time: string;
  total_seats: number;
  type: "offline" | "online"; // adjust as needed
  updatedAt: string;
  validAge: boolean;
  videos: string[];
  tickets_event: string[];
}

export interface ContactForm {
  first_name: string;
  last_name: string;
  email: string;
  phone: number;
  servicetype: string;
  message: string;
}

export interface ArtistNameAndImage {
  _id: string;
  artistname: string;
  artistrole: string;
  images: string[];
}

export interface AttendeeInfo {
  name: string;
  contact_info: {
    email: string;
  };
}

export interface EventLocation {
  city: string;
  venue: string;
}

export interface EventInfo {
  event_name: string;
  event_date: string; // ISO string
  price: number;
  event_location: EventLocation;
}

export interface UserTicket {
  _id: string;
  attendee_id: string;
  attendee_info: AttendeeInfo;
  e_ticket_id: string;
  event_id: string;
  event_info: EventInfo;
  isCancelled: boolean;
  noOfTicketsBought: number;
  sold_at: string; // ISO string
  sold_by: string;
  __v: number;
}

export interface Testimonial {
  _id: string;
  commentdata: string;
  rating: number;
  user_first_name: string;
  user_last_name: string;
  user_email: string;
}

export interface SingelTestimonial {
  _id: string;
  userid: string;
  event_id: string;
  commentdata: string;
  rating: number;
  isdelete: boolean;
  isverify: boolean;
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
  __v: number;
}

export interface Organizer {
  _id: string;
  admin_msg: string;
  company_info: string;
  company_name: string;
  createdAt: string; // ISO date string
  email: string;
  image: string;
  isActive: boolean;
  isThirteenPlus: boolean;
  isadmindelete: boolean;
  isdelete: boolean;
  isverify: boolean;
  phone: number;
  role: string;
  updatedAt: string; // ISO date string
}

export interface AttendeeInfo {
  name: string;
  contact_info: {
    phone: string;
    email: string;
  };
}

export interface EventLocation {
  venue: string;
  city: string;
}

export interface EventInfo {
  event_name: string;
  event_date: string; // ISO date string
  price: number;
  event_location: EventLocation;
}

export interface BookedTicket {
  _id: string;
  attendee_id: string;
  attendee_info: AttendeeInfo;
  e_ticket_id: string;
  event_id: string;
  event_info: EventInfo;
  isCancelled: boolean;
  noOfTicketsBought: number;
  sold_at: string; // ISO date string
  sold_by: string;
}

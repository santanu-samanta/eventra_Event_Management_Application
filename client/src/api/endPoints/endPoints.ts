export const endPoints = {
  user: {
    delectaccount: "/user/deleteaccount",
    changepassword: "/user/changepassword",
    cancelticket: "/ticket/cancel",
    getallticket: "/ticket/list",
    getuserticketlist: "/user/user-booked-tickets",
    bookticket: "/ticket/create",
    createtestimonial: "/user/testimonialdatastore",
    singelticket: "/ticket/getById",
  },
  event: {
    create: "/event/create",
    list: "/event/list",
    edit: "/event/update",
    getorganizerevent: "/organizer/event-list-by-organizer-id",
    delete: "/event/delete",
    updateprofile: "/organizer/profile-update",
    delectaccount: "/organizer/deleteaccount",
    singeldata: "/event/edit",
  },
  contact: {
    contact: "/contactusdatastore",
  },
  upcomingevent: {
    upcomingevent: "/upcomingeventsdata",
  },
  singelevent: {
    singelevent: "/singleevent",
  },
  artistnameandimage: {
    artistnameandimage: "/artistimageandname",
  },
  testimonial: {
    testimonial: "/testimonialdata",
  },
  singeltestimonial: {
    singeltestimonial: "/user/testimonialdatashow",
  },
  getorganizerdata: {
    getorganizerdata: "/organizer/organizerlist",
  },
};

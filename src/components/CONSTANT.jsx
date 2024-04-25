import { CalendarAdd, CalendarEdit, CalendarSearch, CalendarTick, EthereumClassic, HomeHashtag, Ticket } from "iconsax-react";

export const eventMainSidebarData = [
  {
    title: "Dashboard",
    icon: <HomeHashtag className="w-8 h-8 text-white" />,
    url: "/dashboard",
  },
  {
    title: "Explore",
    icon: <CalendarSearch className="w-8 h-8 text-white" />,
    url: "/all-events",
  },
  {
    title: "Create event",
    icon: <CalendarAdd className="w-8 h-8 text-white" />,
    url: "/create-event",
  },
  {
    title: "Manage event",
    icon: <CalendarEdit className="w-8 h-8 text-white" />,
    url: "/manage-events",
  },
  {
    title: "My Events",
    icon: <CalendarTick className="w-8 h-8 text-white" />,
    url: "/my-events",
  },
   {
    title: "My collections",
    icon: <EthereumClassic className="w-8 h-8 text-white" />,
    url: "/my-collections",
  }, {
    title: "My tickets",
    icon: <Ticket className="w-8 h-8 text-white" />,
    url: "/my-tickets",
  },
];

const image = "https://picsum.photos/200/300";

export const events = [
  {
    title: "Host-it official App Launching by Olorunsogo to check for the image layout if it is distorted or not. Thansk",
    timestamp: "2023-09-27T17:30:08.111Z",
    location: "1 Kent street , Melbourne",
    type: "free", //free/paid/private
    eventImage: "/images/event-banner.png",   
    attendees: {
      data: [
        {
          "image": `${image}?random=1`
        },
        {
          "image": `${image}?random=5`
        },
        {
          "image": `${image}?random=6`
        }
      ],
      total: 100,
      
    },
    id: "1",
    role: "Hosting",
    description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
    price: "0.125",
    host: "Olorunsogo"
  },
  {
    title: "Host-it official App Launching",
    timestamp: "2023-08-21T17:30:08.111Z",
    location: "1 Kent street , Melbourne",
    type: "paid", //free/paid/private
    eventImage: "/images/events.jpeg", 
    attendees: {
      data: [
        {
          "image": `${image}?random=1`
        },
        {
          "image": `${image}?random=2`
        },
        {
          "image": `${image}?random=3`
        }
      ],
      total: 20,
      
    },  
    id: "2",
    role: "Attending",
    description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.",
    price: "0.125",   
    host: "Banwo"
  },
  {
    title: "Host-it official App Launching",
    timestamp: "2023-03-20T17:30:08.111Z",
    location: "1 Kent street , Melbourne",
    type: "private", //free/paid/private
    eventImage: "/images/events.jpeg", 
    attendees: {
      data: [
        {
          "image": `${image}?random=1`
        },
        {
          "image": `${image}?random=9`
        },
        {
          "image": `${image}?random=4`
        }
      ],
      total: 87,
      
    },  
    id: "3",
    role: "Hosting",
    description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
    price: "0.34",
    host: "Olamide"
  },
  {
    title: "Host-it official App Launching",
    timestamp: "2023-06-20T17:30:08.111Z",
    location: "1 Kent street , Melbourne",
    type: "private", //free/paid/private
    eventImage: "/images/events.jpeg",   
    attendees: {
      data: [
        {
          "image": image
        }
      ],
      total: 1
    },
    id: "4",
    role: "Attending",
    description: "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish.",
    price: "0.2",
    host: "Jubril"
  },
  {
    title: "Host-it official App Launching",
    timestamp: "2023-05-20T17:30:08.111Z",
    location: "1 Kent street , Melbourne",
    type: "free", //free/paid/private
    eventImage: "/images/event-banner.png",  
    attendees: {
      data: [
        {
          "image": `${image}?random=19`
        },
        {
          "image": `${image}?random=200`
        },
        {
          "image": `${image}?random=3`
        }
      ],
      total: 17909,
      
    }, 
    id: "5",
    role: "Hosting",
    description: "In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.",
    price: "1",
    host: "Manoah"
  },
  {
    title: "Host-it official App Launching",
    timestamp: "2023-11-20T17:30:08.111Z",
    location: "1 Kent street , Melbourne",
    type: "paid", //free/paid/private
    eventImage: "/images/event-banner.png",   
    attendees: {
      data: [
        {
          "image": `${image}?random=88`
        },
        {
          "image": `${image}?random=235`
        },
        {
          "image": `${image}?random=789`
        }
      ],
      total: 689883,
      
    },
    id: "6",
    role: "Attending",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    price: "0.9",
    host: "David"
  },
  {
    title: "Host-it official App Launching",
    timestamp: "2023-10-20T17:30:08.111Z",
    location: "1 Kent street, Melbourne",
    type: "free", //free/paid/private
    eventImage: "/images/event-banner.png",   
    attendees: {
      data: [
        {
          "image": `${image}?random=1`
        },
        {
          "image": `${image}?random=2`
        },
        {
          "image": `${image}?random=3`
        }
      ],
      total: 20,
      
    },
    id: "7",
    role: "Hosting",
    description: "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
    price: "0.45",
    host: "Oluwafemi"
  }
];

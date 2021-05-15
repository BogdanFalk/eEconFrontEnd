import { Component, ViewChild, ElementRef } from "@angular/core";
import * as _ from "lodash";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent {
  page = 1;

  products = [
    {
      title: "Card Title 1",
      description:
        "Some quick example text to build on the card title and make up the bulk of the card content",
      buttonText: "Button",
      img:
        "https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg",
    },
    {
      title: "Card Title 2",
      description:
        "Some quick example text to build on the card title and make up the bulk of the card content",
      buttonText: "Button",
      img:
        "https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg",
    },
    {
      title: "Card Title 3",
      description:
        "Some quick example text to build on the card title and make up the bulk of the card content",
      buttonText: "Button",
      img:
        "https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg",
    },
    {
      title: "Card Title 4",
      description:
        "Some quick example text to build on the card title and make up the bulk of the card content",
      buttonText: "Button",
      img:
        "https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg",
    },
    {
      title: "Card Title 4",
      description:
        "Some quick example text to build on the card title and make up the bulk of the card content",
      buttonText: "Button",
      img:
        "https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg",
    },
    {
      title: "Card Title 4",
      description:
        "Some quick example text to build on the card title and make up the bulk of the card content",
      buttonText: "Button",
      img:
        "https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg",
    },
    {
      title: "Card Title 4",
      description:
        "Some quick example text to build on the card title and make up the bulk of the card content",
      buttonText: "Button",
      img:
        "https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg",
    },
    {
      title: "Card Title 4",
      description:
        "Some quick example text to build on the card title and make up the bulk of the card content",
      buttonText: "Button",
      img:
        "https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg",
    },
    {
      title: "Card Title 4",
      description:
        "Some quick example text to build on the card title and make up the bulk of the card content",
      buttonText: "Button",
      img:
        "https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg",
    },
    {
      title: "Card Title 4",
      description:
        "Some quick example text to build on the card title and make up the bulk of the card content",
      buttonText: "Button",
      img:
        "https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg",
    },
    {
      title: "Card Title 4",
      description:
        "Some quick example text to build on the card title and make up the bulk of the card content",
      buttonText: "Button",
      img:
        "https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg",
    },
    {
      title: "Card Title 4",
      description:
        "Some quick example text to build on the card title and make up the bulk of the card content",
      buttonText: "Button",
      img:
        "https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg",
    },
    {
      title: "Card Title 4",
      description:
        "Some quick example text to build on the card title and make up the bulk of the card content",
      buttonText: "Button",
      img:
        "https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg",
    },
    {
      title: "Card Title 4",
      description:
        "Some quick example text to build on the card title and make up the bulk of the card content",
      buttonText: "Button",
      img:
        "https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg",
    },
    {
      title: "Card Title 4",
      description:
        "Some quick example text to build on the card title and make up the bulk of the card content",
      buttonText: "Button",
      img:
        "https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg",
    },
    {
      title: "Card Title 4",
      description:
        "Some quick example text to build on the card title and make up the bulk of the card content",
      buttonText: "Button",
      img:
        "https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg",
    },
    {
      title: "Card Title 4",
      description:
        "Some quick example text to build on the card title and make up the bulk of the card content",
      buttonText: "Button",
      img:
        "https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg",
    },
    {
      title: "Card Title 4",
      description:
        "Some quick example text to build on the card title and make up the bulk of the card content",
      buttonText: "Button",
      img:
        "https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg",
    },
    {
      title: "Card Title 4",
      description:
        "Some quick example text to build on the card title and make up the bulk of the card content",
      buttonText: "Button",
      img:
        "https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg",
    },
    {
      title: "Card Title 4",
      description:
        "Some quick example text to build on the card title and make up the bulk of the card content",
      buttonText: "Button",
      img:
        "https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg",
    },
    {
      title: "Card Title 4",
      description:
        "Some quick example text to build on the card title and make up the bulk of the card content",
      buttonText: "Button",
      img:
        "https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg",
    },
    {
      title: "Card Title 4",
      description:
        "Some quick example text to build on the card title and make up the bulk of the card content",
      buttonText: "Button",
      img:
        "https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg",
    },
    {
      title: "Card Title 4",
      description:
        "Some quick example text to build on the card title and make up the bulk of the card content",
      buttonText: "Button",
      img:
        "https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg",
    },
  ];

  @ViewChild("searchInput")
  searchInput!: ElementRef;

  title = "Home";

  public searchValue = "";

  onEnter = () => {
    console.log("Hello");
  };

  onSearchChange = _.debounce(() => {
    console.log("Searching...");
  }, 500);
}

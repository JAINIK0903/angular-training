import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  books: any[] = [
    {
      title: 'Unlocking Android',
      thumbnailUrl:
        'https://media.istockphoto.com/id/1411701868/photo/magic-book-with-glitter-open-book-with-lights-glowing-in-dark-background.jpg?b=1&s=170667a&w=0&k=20&c=YRAsEE8YSqO_oMc0vtFDcIFrEO-t3yDoN_MkJ51PAlY=',
      shortDescription: "Unlocking Android: A Developer's Guide provides concise, hands-on instruction for the Android operating system and development tools. This book teaches important architectural concepts in a straightforward writing style and builds on this with practical and useful examples throughout.",
      authors: ['W. Frank Ableson', 'Charlie Collins', 'Robi Sen'],
      categories: ['Open Source', 'Mobile'],
    },
    {
      title: 'Android in Action, Second Edition',
           thumbnailUrl: "https://media.istockphoto.com/id/1411701868/photo/magic-book-with-glitter-open-book-with-lights-glowing-in-dark-background.jpg?b=1&s=170667a&w=0&k=20&c=YRAsEE8YSqO_oMc0vtFDcIFrEO-t3yDoN_MkJ51PAlY=",
       shortDescription: "Android in Action, Second Edition is a comprehensive tutorial for Android developers. Taking you far beyond \"Hello Android,\" this fast-paced book puts you in the driver's seat as you learn important architectural concepts and implementation strategies. You'll master the SDK, build WebKit apps using HTML 5, and even learn to extend or replace Android's built-in features by building useful and intriguing examples. ",
      authors: ['W. Frank Ableson', 'Robi Sen'],
      categories: ['Java'],
    },
    {
      title: 'Flex 3 in Action',
      thumbnailUrl:
        'https://media.istockphoto.com/id/1411701868/photo/magic-book-with-glitter-open-book-with-lights-glowing-in-dark-background.jpg?b=1&s=170667a&w=0&k=20&c=YRAsEE8YSqO_oMc0vtFDcIFrEO-t3yDoN_MkJ51PAlY=',
      shortDescription:"New web applications require engaging user-friendly interfaces   and the cooler, the better. With Flex 3, web developers at any skill level can create high-quality, effective, and interactive Rich Internet Applications (RIAs) quickly and easily. Flex removes the complexity barrier from RIA development by offering sophisticated tools and a straightforward programming language so you can focus on what you want to do instead of how to do it.",
      authors: ['Tariq Ahmed with Jon Hirschi', 'Faisal Abid'],
      categories: ['Internet'],
    },
    {
      title: 'Flex 4 in Action',
      thumbnailUrl:
        'https://media.istockphoto.com/id/1411701868/photo/magic-book-with-glitter-open-book-with-lights-glowing-in-dark-background.jpg?b=1&s=170667a&w=0&k=20&c=YRAsEE8YSqO_oMc0vtFDcIFrEO-t3yDoN_MkJ51PAlY=',
      shortDescription:"Using Flex, you can create high-quality, effective, and interactive Rich Internet Applications (RIAs) quickly and easily. Flex removes the complexity barrier from RIA development by offering sophisticated tools and a straightforward programming language so you can focus on what you want to do instead of how to do it.",
      authors: ['Tariq Ahmed', 'Dan Orlando', 'John C. Bland II', 'Joel Hooks'],
      categories: ['Internet'],
    },
    {
      title: 'Zend Framework in Action',
      thumbnailUrl:
        'https://media.istockphoto.com/id/1411701868/photo/magic-book-with-glitter-open-book-with-lights-glowing-in-dark-background.jpg?b=1&s=170667a&w=0&k=20&c=YRAsEE8YSqO_oMc0vtFDcIFrEO-t3yDoN_MkJ51PAlY=',
        shortDescription: "Zend Framework in Action is a comprehensive tutorial that shows how to use the Zend Framework to create web-based applications and web services. This book takes you on an over-the-shoulder tour of the components of the Zend Framework as you build a high quality, real-world web application.",
      authors: ['Rob Allen', 'Nick Lo', 'Steven Brown'],
      categories: ['Web Development'],
    },
    {
      title: 'Griffon in Action',
      thumbnailUrl:
        'https://media.istockphoto.com/id/1411701868/photo/magic-book-with-glitter-open-book-with-lights-glowing-in-dark-background.jpg?b=1&s=170667a&w=0&k=20&c=YRAsEE8YSqO_oMc0vtFDcIFrEO-t3yDoN_MkJ51PAlY=',
        shortDescription: "Griffon in Action is a comprehensive tutorial written for Java developers who want a more productive approach to UI development. In this book, you'll immediately dive into Griffon. After a Griffon orientation and a quick Groovy tutorial, you'll start building examples that explore Griffon's high productivity approach to Swing development. One of the troublesome parts of Swing development is the amount of Java code that is required to get a simple application off the ground.",
      authors: ['Andres Almiray', 'Danno Ferrin', '', 'James Shingler'],
      categories: ['Java'],
    },
  ];
}

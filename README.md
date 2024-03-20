  ## React OmniRoom


  React OmniRoom is a dynamic and user-friendly React component designed to manage the visibility of navigation bars in your web applications. It enhances the user experience by automatically hiding the navigation bar when scrolling and revealing it when scrolling in the opposite direction. This maximizes screen real estate without sacrificing easy navigation access.

  ## Key Features

  - Dynamic Visibility: The bottom navigation bar automatically hides when scrolling down and shows when scrolling up, providing a clean and immersive user experience.

  - Easy to Use: Simply wrap your navigation bar component with react-bottom-room and it handles the rest.

  - Customizable: Supports all standard div attributes, allowing you to customize the navigation bar to fit your needs.

  - Lightweight: With a small footprint, it doesn’t add unnecessary weight to your project.

  ## Installation

  You can install react-bottom-room using npm:

  ```bash
    npm install react-omniroom
  ```

  ## Usage

  Here’s a basic example of how to use react-bottom-room in your application:

  ``` bash
  import { HeadRoom, FootRoom, PortRoom, StarboardRoom } from 'react-omniroom';



  <HeadRoom hideDistance='28' hiddenClassName='hidden'>
    <h1>This will stick on top of ther viewport</h1>
  </HeadRoom>


  <FootRoom hideDistance='28' hiddenClassName='hidden'>
    <h1>This will stick on bottom of the viewport</h1>
  </FootRoom>
  

  <PortRoom hideDistance='28' hiddenClassName='hidden'>
    <h1>This will stick on the left side of the viewport</h1>
  </PortRoom>


  <StarboardRoom hideDistance='28' hiddenClassName='hidden'>
    <h1>This will stick on the right side of the viewport</h1>
  </StarboardRoom>

  ```


  ## Tailwind CSS
  React OmniRoom is designed to work seamlessly with Tailwind CSS, a utility-first CSS framework. This means you can use Tailwind’s utility classes to easily style and customize your navigation bars.

  - className (optional): You can pass Tailwind utility classes directly to the className prop. This allows you to style the default state of your navigation bars. For example, you can set the background color, text color, padding, margin, etc.

  - hiddenClassName (required with Tailwind CSS): This prop is used to apply styles when the navigation bar is in a hidden state. You must use Tailwind classes for this prop. When the navigation bar is hidden (i.e., when the user scrolls), the classes passed to hiddenClassName will be applied. This allows you to further customize the appearance of the navigation bar during its hidden state. For example, you can change the background color, apply a shadow, change the border style, etc.

  By leveraging Tailwind CSS with React OmniRoom, you can create dynamic, responsive, and beautifully styled navigation bars with minimal effort. Remember, the power of Tailwind CSS comes from its utility-first approach, which provides a set of low-level, composable classes that let you build any design, directly in your markup. This makes it a great fit for React OmniRoom’s customizable props. 😊


  ## CSS Integration
   React OmniRoom is designed to work seamlessly with CSS. You can add a default CSS class to the className prop, and when any of the room components (HeadRoom, FootRoom, PortRoom, StarboardRoom) are hidden, you can style them accordingly.

  To do this, you can use a combination of the word ‘hidden’ and the room name, i.e., hiddenHeadRoom, hiddenFootRoom, hiddenPortRoom, hiddenStarRoom. This allows you to apply specific styles when the room is in a hidden state.


  ## Contributing

  We welcome contributions to [react-omniroom!](https://www.npmjs.com/package/react-omniroom) If you have a feature request, bug report, or want to improve the library, feel free to open an issue or submit a pull request on our github [the React Omniroom GitHub repository](https://github.com/DamifeZion/react-omniroom).
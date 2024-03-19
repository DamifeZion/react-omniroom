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
    npm install react-bottom-room
  ```

  ## Usage

  Here’s a basic example of how to use react-bottom-room in your application:

  ``` bash
  import { HeadRoom, FootRoom, PortRoom, StarboardRoom } from 'react-omniroom';



  <HeadRoom>
    <h1>This will stick on top of ther viewport</h1>
  </HeadRoom>


  <FootRoom>
    <h1>This will stick on bottom of the viewport</h1>
  </FootRoom>
  

  <PortRoom>
    <h1>This will stick on the left side of the viewport</h1>
  </PortRoom>


  <StarboardRoom>
    <h1>This will stick on the right side of the viewport</h1>
  </StarboardRoom>

  ```


  ## Contributing

  We welcome contributions to [react-omniroom!](https://www.npmjs.com/package/react-omniroom) If you have a feature request, bug report, or want to improve the library, feel free to open an issue or submit a pull request on out github [the React Omniroom GitHub repository](https://github.com/DamifeZion/react-omniroom).
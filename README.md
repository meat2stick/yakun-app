# Menu Project
A menu website to show items available on a menu.

## Live Demo
Check out the deployed project [here](http://menu-app-yakun.s3.ap-southeast-1.amazonaws.com/index.html).
*Note it is currently not working as the backend service is down atm.

**Note**: All menu items currently display the same placeholder image. This is a temporary implementation while awaiting updated image assets.

## **Overview**
This repository contains a React front end application developed as part of a technical interview.
The application will query required data through a live GraphQL endpoint which was developed previously in [this repository.](https://github.com/meat2stick/grain_menu_project).

The primary goal is to demonstrate the ability to:
- Set up a React project with Vite from scratch.
- Use Apollo to do a GraphQL query.
- Render the items on a menu.
- Deploy the application live so that the website can be viewed.

## **Getting Started**
### Prerequisites
- Install node > `18`.

### How to setup the project locally.
- Clone the repository.
- Run `npm install`.
- Run `npm run dev`.

## Technologies Used
- Ant Design (antd) for UI components.
- Apollo for GraphQL.
- React Functional Components.
- Tailwind for CSS.
- Typescript for type safety.

## Deployment
The application is hosted on AWS S3 with static website hosting enabled.

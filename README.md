# Content-Edit-System---Vue

## Project
This is the content edit system designed by Vue.js. The purpose of starting this project is to quickly build the website through editing web content on the admin page. Designing a specific database structure to identity different section of this website with multiple contents. The admin page is to do CRUD(create, read, update, delete) job to manage web content. Once there is any change in the backend system, it will render to the landing page immediately.

## Tech Stack

Vue + Vuex + Vue-router + Webpack + JS ES6/ES7 + Sass + Element-ui + Bootstrap

## Project Setup
```
git clone https://github.com/an-liu1/Content-Edit-System---Vue.git

cd Content-Edit-System---Vue

npm install

npm run serve

```

## Login auth
username: admin@somoplay.com

password: 111111


## Features
- [x] Log in/Log out (finished)
- [x] User information edit (finished)
- [x] All web sections' content management(CRUD) (finished)
- [x] Images upload (finished)
- [x] Pagination (finished)
- [x] Landing Page (finished)
- [x] Email Template/Sending Email (finished)
- [ ] Multiple Languages (developing)
- [ ] Section preview (developing)
- [ ] Create new section (developing)
- [ ] Create new website (developing)
- [ ] Section templates option (developing)
- [ ] Dashboard information Lists (developing)
- [ ] Sign up / Forget password (developing)

## Document tree

```
├───node_modules
├───public                       // entrance
│   ├───images                   // landing page images
│   │   ├───clients
│   │   ├───demo
│   │   ├───features-img
│   │   ├───icons
│   │   └───testi
│   └───js                       // landing page js files
└───src
    ├───api                      // interface address and configuration
    ├───assets                   // admin page assets
    │   ├───css
    │   └───img
    ├───components               // all pages components
    │   ├───landing              // landing page section components
    │   └───parts                // edit/add dialog
    ├───config                   // basic configuration
    ├───fonts                    // fonts
    └───views                    // all pages
        └───somoplay             // somoplay website content managent pages
```

## Database Structure

```
{
    "_id": "",
    "createdDate": "",
    "isAdmin": "",
    "mainImage": "",
    "mainImageType": "",
    "nameEn": "",
    "nameCh": "",
    "nameTr": "",
    "nameColor": "",
    "nameFont": "",
    "nameFontSize": ",
    "descriptionEn": "",
    "descriptionCh": "",
    "descriptionTr": "",
    "descriptionColor": "",
    "descriptionFont": "",
    "descriptionFontSize": "",
    "subDescriptionEn": "",
    "subDescriptionCh": "",
    "subDescriptionTr": "",
    "subDescriptionColor": "",
    "subDescriptionFont": "",
    "subDescriptionFontSize": ",
    "link": "",
    "appName": "",
    "pageName": "",
    "sectionName": "",
    "positionName": "",
    "subPositionName": "",
    "sortId": "
}
```

## Ultimate Goal

1. All elements in the website is editable in the dashboard (including position, font-size, font color, font, background-color, even submenu item)
2. Everyone can make their own basic website through this system
3. Adding more features
4. Adding more website template for chosing


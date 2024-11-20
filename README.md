# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

## Screenshoots


![traveldsk 1](https://github.com/user-attachments/assets/48b96c9c-d679-41bf-97af-80adf96fed2c)

![551](https://github.com/user-attachments/assets/0c8d399d-f99f-4097-be60-e745eca0ad87)
![52](https://github.com/user-attachments/assets/86b7e511-2865-4cf7-a595-432a8afae949)

## Built With
![HTL5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![image](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![image](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)

![VITE](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)
![REACT](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![REACT ROUTER](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![REDUX](https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white)
![NPM](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)
![MATERIAL UI](https://img.shields.io/badge/Material%20UI-007FFF?style=for-the-badge&logo=mui&logoColor=white)

![VSCODE](https://img.shields.io/badge/VSCode-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white)
![RDITOR CONFIG](https://img.shields.io/badge/Editor%20Config-E0EFEF?style=for-the-badge&logo=editorconfig&logoColor=000)
![ESLINT](https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white)
![PRETTIER](https://img.shields.io/badge/prettier-1A2C34?style=for-the-badge&logo=prettier&logoColor=F7BA3E)

![FIGMA](https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white)

![VERCEL](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)
![GITHUB](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)

![CHATGPT](https://img.shields.io/badge/ChatGPT-74aa9c?style=for-the-badge&logo=openai&logoColor=white)

![AXIOS](https://img.shields.io/badge/AXIOS-F24E1E)
![FORMIK](https://img.shields.io/badge/FORMIK-3A33D1)
## Installation

To set up the Advice Generator Application locally, follow these steps:

1. Clone the GitHub repository to your local machine:
    
    ```
    git clone https://github.com/0xabdulkhalid/advice-generator.git
    ```
    
2. Navigate to the project's directory:
    
    ```
    cd advice-generator
    ```
    
3. Install the project's dependencies using npm:
    
    ```
    npm install
    ```
    
4. Build the project to bundle JavaScript, minify HTML and CSS, and move images:
    
    ```
    npm run dev
    ```
    
5. The build files can be found on `dist` (distribution) directory.

## API Reference

#### Get all items

```http
  GET https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `page` | `string` | **Required**. Number of page|
| `limit` | `string` | **Required**. Limit of itemson the Page|

#### Get item

```http
  GET  GET https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

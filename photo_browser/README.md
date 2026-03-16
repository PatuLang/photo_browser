## Photo Browser

A small React + TypeScript app that browses photos, users, and albums from the JSONPlaceholder REST API.

### Live application

If GitHub Pages is working, you can view the app here:

- `https://PatuLang.github.io/photo_browser/`

### Running the app locally (fallback if GitHub Pages does not work)

If the GitHub Pages link does not work, you can run the app locally:

1. **Clone the repository**

   ```bash
   git clone https://github.com/PatuLang/photo_browser.git
   cd photo_browser/photo_browser
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Open in the browser**

   Vite will print a local URL:

   ```text
   http://localhost:5173/
   ```

   Open that URL in your browser to use the app.

### Notes

- The app uses `HashRouter`, so routes look like `#/photos`, `#/users/1`, etc.
- Data is loaded from `https://jsonplaceholder.typicode.com`, so you need an internet connection for the content to appear.


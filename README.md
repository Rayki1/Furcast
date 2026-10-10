# FurCast Landing Page Draft

A responsive, olive-green and cream landing page concept based on **Proposal 3: FurCast — Web-Based Real-Time Pet Grooming Tracker and Predictive Appointment Forecasting Platform**.

This is a **frontend landing-page draft only**. It does not include login, a database, admin dashboard, live appointment booking, pet tracking, notification delivery, or real forecasting. The buttons navigate to sections or open an email draft.

## Project structure

```text
furcast_landing/
├── app.py
├── requirements.txt
├── README.md
├── templates/
│   └── index.html
└── static/
    ├── css/
    │   └── style.css
    ├── js/
    │   └── main.js
    └── images/
        └── README.txt
```

## Run in VS Code

1. Extract the ZIP file.
2. Open the extracted `furcast_landing` folder in VS Code.
3. Open the VS Code terminal (**Terminal → New Terminal**).
4. Optional but recommended: create a virtual environment:

   **Windows**
   ```powershell
   py -m venv .venv
   .\.venv\Scripts\Activate.ps1
   ```

   If PowerShell blocks activation, you can skip the virtual environment and continue, or use Command Prompt:
   ```bat
   .venv\Scripts\activate.bat
   ```

5. Install the dependency:
   ```bash
   python -m pip install -r requirements.txt
   ```
   If `python` is not recognized on Windows, try `py -m pip install -r requirements.txt`.

6. Start the Flask app:
   ```bash
   python app.py
   ```
   Or on Windows:
   ```bash
   py app.py
   ```

7. Open the local address printed in the terminal, normally **http://127.0.0.1:5000**.

8. To stop the server, return to the terminal and press **Ctrl+C**.

## Notes

- Bootstrap and Google Fonts load from CDNs, and the pet photos use Unsplash URLs. An internet connection is needed for those external assets.
- The contact link uses a placeholder address (`hello@furcast.example`). Replace it with the project's actual contact email before presenting it as a real business.
- Images are visual placeholders; replace the image URLs in `templates/index.html` with approved project images if available.
- Flask is only used to serve the page. The site intentionally has no database or system functionality.
\n\n## Vercel deployment fix\n\nThe HTML template is explicitly resolved from `templates/`. CSS and JavaScript are copied into `public/` and referenced as `/css/style.css` and `/js/main.js`, because Vercel serves `public/` assets through its CDN. Keep `app.py`, `requirements.txt`, `templates/`, and `public/` at the Vercel Project Root Directory.\n

## Local CSS/JS routes

The Flask app explicitly serves `public/css/` at `/css/` and `public/js/` at `/js/`. Make sure the `public` folder is beside `app.py`.

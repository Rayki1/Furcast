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


## Vercel deployment fix

The HTML template is explicitly resolved from `templates/`. CSS and JavaScript are copied into `public/` and referenced as `/css/style.css` and `/js/main.js`, because Vercel serves `public/` assets through its CDN. Keep `app.py`, `requirements.txt`, `templates/`, and `public/` at the Vercel Project Root Directory.


## Local CSS/JS routes

The Flask app explicitly serves `public/css/` at `/css/` and `public/js/` at `/js/`. Make sure the `public` folder is beside `app.py`.


## Responsive update
Updated responsive breakpoints and container sizing for phones (including narrow screens), tablets/iPads, laptops, and desktop displays. Both `public/css/style.css` and `static/css/style.css` contain the same responsive rules.


## Landing-page updates
- Updated the hero call-to-action to **Book Appointment** and the navigation call-to-action to **Register**, with a profile icon beside it.
- Replaced the service cards with six grooming services.
- Added testimonial, booking steps, and FAQ sections to the page (not to the navigation bar).
- Added a floating green Contact shortcut that scrolls to the contact options.
- The landing page remains a frontend concept: registration, appointment booking, and form submissions are not connected to a backend and do not save or send data.

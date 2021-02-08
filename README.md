# Open, Load, Close
A very minimal Chrome extension to open a link, load it, then close the tab automatically. Useful for repetitive actions where you don't need to see the result.

## Rationale
I wrote this small extension because I found myself often needing to click a link, but didn't need to see the result. For me that was clicking a link in an email notification, and then not wanting those tabs sitting around. So this allows me to right-click and trigger the link (and associated action), but automatically clean up the tabs.

## Installation

1. Get a copy of the code; you can clone the repo from GH, or just download a zip and drop it on your computer somewhere.
2. In Chrome, browse to [`chrome://extensions/`](chrome://extensions/).
3. Toggle "Developer Mode" on (top-right).
4. Click "Load unpacked".
5. Browse to the `app` directory within this project, and then click `Select`.
6. Make sure the toggle in the bottom-right of the "Open, Load, Close" extension is toggled on.

## Usage
1. On any page, right-click a link.
2. Select "Open, load, and close" from the list (it will be grouped with any other extension menus, towards the bottom)
3. Your link will open in a new tab, fully load, and then automatically close.
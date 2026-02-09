# Populate Sanity Studio Content

I have created a script `populate-data.ts` to help you populate your Sanity Studio with the initial content (Destinations and Tips) using the images from your project.

To run this script, you will need a **Sanity API Token** with "Editor" or "Write" permissions.

Here is how to proceed:

1.  Go to [sanity.io/manage](https://www.sanity.io/manage), select your project (`travel-website`), go to **API**, and create a new **CORS origin** for localhost if needed (usually fine for scripts) and most importantly, create an **API token** with "Editor" rights.
2.  Copy the token.
3.  Run the script in your terminal:
    ```bash
    # Windows PowerShell
    $env:SANITY_API_TOKEN="<paste-your-token-here>"; npx tsx populate-data.ts
    ```
    (Replace `<paste-your-token-here>` with your actual token)

This script will upload the images from your `public` folder and create the corresponding Destination and Tip documents, allowing you to see the filtering in action immediately.
